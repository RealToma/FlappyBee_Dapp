export const checkInteger = (number: any) => {
  if (Number.isInteger(number)) {
    return number;
  } else if (Number.isFinite(number)) {
    return parseFloat(number.toFixed(3));
  }
};
