export const moneyFormat = (value) => {
  const str = typeof value === 'number' ? `${value}` : value;
  return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
