
export const dumpShuffle = (array) => { array.sort(() => Math.random() - 0.5); };


export const getRandomArray = (nItems) => {
  const edge = Math.sqrt(nItems);
  if (edge % 1 !== 0) {
    throw new Error('Gimme number i can make squere of it!!!');
  }
  const numbers = [];
  for (let number = 1; number <= nItems; number += 1) {
    numbers.push(number);
  }
  dumpShuffle(numbers);
  return numbers;
};

export const getArrayInSquareMatrix = (array) => {
  const copy = [...array];
  const edge = Math.sqrt(array.length);
  const squareMatrix = [];
  for (let index = 0; index < edge; index += 1) {
    squareMatrix.push(copy.splice(0, edge));
  }
  return squareMatrix;
};

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
