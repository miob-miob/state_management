export const getRandInt = (min = 0, max = 100) => {
  const randFloat = Math.random() * (max - min + 1);
  return Math.floor(min + randFloat);
};

export const getRandomString = (minLength = 1000, maxLength = 1000) => {
  const stringLength = getRandInt(minLength, maxLength);
  let result = '';
  for (let index = 0; index < stringLength; index += 1) {
    result += String.fromCharCode(getRandInt(97, 122));
  }

  return result;
};
