export const toCurrency = i => `£${i.toFixed(2)}`
export const toLocalCurrecy = (trip, i) => `${trip?.currency?.symbol}${i.toFixed(2)}`
