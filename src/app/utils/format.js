export const toCurrency = (i = 0, fixed = 2) => `$${i.toFixed(fixed)}`
export const toLocalCurrency = (i = 0, symbol = '?') => `${symbol}${i.toFixed(2)}`
