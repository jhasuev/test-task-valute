export type Currency = 'USD' | 'EUR' | 'RUB'

export interface CurrencyRates {
  [key: string]: number
}

export interface CurrencyState {
  baseCurrency: Currency
  rates: CurrencyRates
  lastUpdate: Date | null
} 