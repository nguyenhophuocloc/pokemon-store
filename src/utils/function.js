export const captitalizeFirstLetter = (str) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return "";
};

export const handleId = (number) => {
  if (number < 10) {
    return "00" + number;
  } else if (number >= 10 && number < 100) {
    return "0" + number;
  } else {
    return number;
  }
};
