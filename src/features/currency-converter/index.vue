<template>
  <div class="converter">
    <h2>Конвертер валют</h2>
    <form class="converter-form" @submit.prevent>
      <div class="form-row">
        <div class="input-group">
          <label for="from-currency">Из:</label>
          <select 
            id="from-currency"
            v-model="fromCurrency"
            @change="handleFromCurrencyChange"
          >
            <option 
              v-for="currency in CURRENCIES" 
              :key="currency" 
              :value="currency"
            >
              {{ CURRENCY_LABELS[currency] }}
            </option>
          </select>
        </div>
        
        <div class="input-group">
          <label for="from-amount">Сумма:</label>
          <input 
            id="from-amount"
            type="number"
            v-model="fromAmount"
            @input="handleFromAmountChange"
            step="0.01"
            min="0"
            :class="{ 'error': fromAmountError }"
          >
          <div class="error-message" v-if="fromAmountError">
            {{ fromAmountError }}
          </div>
        </div>
      </div>
      
      <div class="form-row">
        <div class="input-group">
          <label for="to-currency">В:</label>
          <select 
            id="to-currency"
            v-model="toCurrency"
            @change="handleToCurrencyChange"
          >
            <option 
              v-for="currency in CURRENCIES" 
              :key="currency" 
              :value="currency"
            >
              {{ CURRENCY_LABELS[currency] }}
            </option>
          </select>
        </div>
        
        <div class="input-group">
          <label for="to-amount">Сумма:</label>
          <input 
            id="to-amount"
            type="number"
            v-model="toAmount"
            @input="handleToAmountChange"
            step="0.01"
            min="0"
            readonly
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useCurrencyStore } from '@/app/providers/store'
import { CURRENCIES, CURRENCY_LABELS, DEFAULT_BASE_CURRENCY } from '@/shared/config/constants'
import type { Currency } from '@/shared/types/currency'

const currencyStore = useCurrencyStore()

const fromCurrency = ref<Currency>(DEFAULT_BASE_CURRENCY)
const toCurrency = ref<Currency>('USD')
const fromAmount = ref<number | ''>('')
const toAmount = ref<number | ''>('')

// Простая валидация
const fromAmountError = computed(() => {
  if (fromAmount.value === '') {
    return 'Введите сумму'
  }
  
  if (isNaN(Number(fromAmount.value))) {
    return 'Введите числовое значение'
  }
  
  const numValue = Number(fromAmount.value)
  
  if (numValue < 0) {
    return 'Сумма должна быть больше 0'
  }
  
  if (numValue > 1000000) {
    return 'Сумма слишком большая'
  }
  
  return ''
})

const convert = (amount: number, from: Currency, to: Currency) => {
  if (!amount) return ''
  const rate = currencyStore.getRate(from, to)
  return (amount * rate).toFixed(2)
}

const handleFromCurrencyChange = () => {
  if (fromAmount.value !== '') {
    const numValue = Number(fromAmount.value)
    if (!isNaN(numValue)) {
      toAmount.value = convert(numValue, fromCurrency.value, toCurrency.value)
    }
  }
}

const handleToCurrencyChange = () => {
  if (fromAmount.value !== '') {
    const numValue = Number(fromAmount.value)
    if (!isNaN(numValue)) {
      toAmount.value = convert(numValue, fromCurrency.value, toCurrency.value)
    }
  }
}

const handleFromAmountChange = () => {
  if (fromAmount.value === '') {
    toAmount.value = ''
    return
  }
  
  const numValue = Number(fromAmount.value)
  if (isNaN(numValue)) {
    toAmount.value = ''
    return
  }
  
  toAmount.value = convert(numValue, fromCurrency.value, toCurrency.value)
}

const handleToAmountChange = () => {
  // Это поле только для чтения, поэтому здесь ничего не делаем
}

// Инициализация
watch(() => currencyStore.rates, () => {
  if (fromAmount.value !== '') {
    const numValue = Number(fromAmount.value)
    if (!isNaN(numValue)) {
      toAmount.value = convert(numValue, fromCurrency.value, toCurrency.value)
    }
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
.converter {
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-lg);
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  
  h2 {
    margin-bottom: var(--spacing-lg);
    color: var(--color-text);
    text-align: center;
  }
}

.converter-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-row {
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  
  label {
    color: var(--color-text-light);
    font-size: var(--font-size-small);
  }
  
  input, select {
    padding: var(--spacing-sm);
    border: 1px solid var(--color-background-dark);
    border-radius: var(--border-radius-sm);
    background-color: var(--color-background);
    color: var(--color-text);
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    
    &.error {
      border-color: var(--color-error);
    }
  }
  
  .error-message {
    color: var(--color-error);
    font-size: var(--font-size-small);
  }
}
</style> 