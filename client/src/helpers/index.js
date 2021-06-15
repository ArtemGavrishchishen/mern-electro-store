export const toCurrency = price => {
  return new Intl.NumberFormat('en-EN', {
    currency: 'USD',
    style: 'currency',
  }).format(price)
}
