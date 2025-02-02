const hasSameDigits = (number) => {
  const array = String(number).split("");

  return array.some((element, index) => element === array[index + 1]);
};

const isOrderCorrect = (number) => {
  const array = String(number).split("");

  return array.every(
    (_, index) => index === 0 || array[index] >= array[index - 1]
  );
};

const main = () => {
  const array = [];

  for (let password = 124075; password <= 580769; password++) {
    if (hasSameDigits(password) && isOrderCorrect(password)) {
      array.push(password);
    }
  }

  console.log(array.length);
};

main();
