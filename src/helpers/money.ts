import { Money, Currency } from 'ts-money'

export function getCurrency(amound: number) {
  const LTC: Currency = {
    decimal_digits: 2,
    name: 'Real',
    name_plural: 'Reais',
    code: 'BRL',
    symbol: '',
    symbol_native: '',
    rounding: 0,
  }

  return Money.fromDecimal(amound, LTC).toString().split('.').join(',')
}
