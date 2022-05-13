export const currencyChange = symbol => {
  return {
      type: 'CHANGE_CURRENCY',
      payload: { symbol }
  }
}