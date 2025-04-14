import type { Currency } from '@/shared/types/currency'

export const CURRENCIES: Currency[] = ['USD', 'EUR', 'RUB']

export const CURRENCY_LABELS: Record<Currency, string> = {
  USD: 'Доллар США',
  EUR: 'Евро',
  RUB: 'Российский рубль',
}

export const DEFAULT_BASE_CURRENCY: Currency = 'RUB'

export const REFRESH_INTERVAL = 60000 // 1 minute 