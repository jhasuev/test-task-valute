import { defineStore } from 'pinia'
import type { Currency, CurrencyRates, CurrencyState } from '@/shared/types/currency'
import { currencyApi } from '@/shared/api/currency'

export const useCurrencyStore = defineStore('currency', {
  state: (): CurrencyState => ({
    baseCurrency: 'RUB',
    rates: {},
    lastUpdate: null
  }),
  
  getters: {
    getRate: (state: CurrencyState) => (from: Currency, to: Currency): number => {
      if (from === to) return 1
      const key = `${from.toLowerCase()}-${to.toLowerCase()}`
      return state.rates[key] || 0
    },
    
    getFormattedRate: (state: CurrencyState) => (from: Currency, to: Currency): string => {
      if (from === to) return '1.00'
      const key = `${from.toLowerCase()}-${to.toLowerCase()}`
      const rate = state.rates[key] || 0
      return rate.toFixed(4)
    }
  },
  
  actions: {
    async fetchRates() {
      try {
        const rates = await currencyApi.getRates()
        this.rates = rates
        this.lastUpdate = new Date()
      } catch (error) {
        console.error('Failed to fetch currency rates:', error)
      }
    },
    
    setBaseCurrency(currency: Currency) {
      this.baseCurrency = currency
    }
  }
}) 