export const checkInteger = (number: any) => {
  if (Number.isInteger(number)) {
    return number;
  } else if (Number.isFinite(number)) {
    return parseFloat(number.toFixed(3));
  }
};

export const validateEmail = (email: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
