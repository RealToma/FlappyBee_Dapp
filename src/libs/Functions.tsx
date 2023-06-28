export const shortAddress = (address: any) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};
