import { useCurrencyStore } from '@/app/providers/store'
import { REFRESH_INTERVAL } from '@/shared/config/constants'

export const startCurrencyRatesUpdates = () => {
  const currencyStore = useCurrencyStore()
  
  // Initial fetch
  currencyStore.fetchRates()
  
  // Set up periodic updates
  setInterval(() => {
    currencyStore.fetchRates()
  }, REFRESH_INTERVAL)
} 