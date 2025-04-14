import type { CurrencyRates } from '@/shared/types/currency'

const API_URL = 'https://status.neuralgeneration.com/api/currency'

export const currencyApi = {
  async getRates(): Promise<CurrencyRates> {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error('Failed to fetch currency rates')
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching currency rates:', error)
      throw error
    }
  }
} 