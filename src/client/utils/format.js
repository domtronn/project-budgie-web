export const toCurrency = (i = 0) => `$${i.toFixed(2)}`
export const toLocalCurrency = (i = 0, symbol = '?') => `${symbol}${i.toFixed(2)}`
