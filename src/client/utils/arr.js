export const random = arr => arr[Math.round((+new Date() % (100 * arr.length)) / 100)]
