<template>
  <div class="currency-table">
    <h2>Курсы валют</h2>
    <div class="table-container">
      <div class="table-row header">
        <div class="cell">Валюта</div>
        <div class="cell">Курс</div>
      </div>
      <div 
        v-for="currency in CURRENCIES" 
        :key="currency"
        class="table-row"
      >
        <div class="cell">{{ CURRENCY_LABELS[currency] }}</div>
        <div class="cell">
          {{ currencyStore.getFormattedRate(baseCurrency, currency) }}
        </div>
      </div>
    </div>
    <div class="last-update" v-if="currencyStore.lastUpdate">
      Последнее обновление: {{ formatDate(currencyStore.lastUpdate) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCurrencyStore } from '@/app/providers/store'
import { CURRENCIES, CURRENCY_LABELS } from '@/shared/config/constants'

const currencyStore = useCurrencyStore()
const baseCurrency = computed(() => currencyStore.baseCurrency)

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date)
}
</script>

<style lang="scss" scoped>
.currency-table {
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  
  h2 {
    margin: 0 0 var(--spacing-md);
    color: var(--color-text);
  }
}

.table-container {
  border: 1px solid var(--color-background-dark);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  &.header {
    background-color: var(--color-background-dark);
    font-weight: 500;
  }
  
  &:not(.header) {
    &:hover {
      background-color: var(--color-background-dark);
    }
  }
}

.cell {
  padding: var(--spacing-md);
  text-align: center;
  border-bottom: 1px solid var(--color-background-dark);
  
  &:last-child {
    border-bottom: none;
  }
}

.last-update {
  margin-top: var(--spacing-md);
  text-align: right;
  color: var(--color-text-light);
  font-size: var(--font-size-small);
}
</style> 