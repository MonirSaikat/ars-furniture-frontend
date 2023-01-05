export const moneyFormat = (value) => {
  const str = typeof value === 'string' ? `${number}` : value;
  return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
