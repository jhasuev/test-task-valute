<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/convert" class="nav-link">Конвертация</router-link>
    </nav>
    
    <div class="currency-selector">
      <label for="base-currency">Основная валюта:</label>
      <select 
        id="base-currency"
        v-model="selectedCurrency"
        @change="handleCurrencyChange"
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
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCurrencyStore } from '@/app/providers/store'
import { CURRENCIES, CURRENCY_LABELS, DEFAULT_BASE_CURRENCY } from '@/shared/config/constants'
import type { Currency } from '@/shared/types/currency'

const currencyStore = useCurrencyStore()
const selectedCurrency = ref<Currency>(currencyStore.baseCurrency)

const handleCurrencyChange = () => {
  currencyStore.setBaseCurrency(selectedCurrency.value)
}

onMounted(() => {
  currencyStore.fetchRates()
})
</script>

<script lang="ts">
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background-color: var(--color-background);
  box-shadow: var(--shadow-sm);
}

.nav {
  display: flex;
  gap: var(--spacing-md);
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-background-dark);
  }
  
  &.router-link-active {
    color: var(--color-primary);
    font-weight: 500;
  }
}

.currency-selector {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  label {
    color: var(--color-text-light);
  }
  
  select {
    padding: var(--spacing-sm);
    border: 1px solid var(--color-background-dark);
    border-radius: var(--border-radius-sm);
    background-color: var(--color-background);
    color: var(--color-text);
    cursor: pointer;
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }
}
</style> 