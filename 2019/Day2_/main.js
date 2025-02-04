const intCodeExecution = (inputData) => {
  const data = [...inputData];
  const operations = {
    1: (data, index) =>
      (data[data[index + 3]] = data[data[index + 1]] + data[data[index + 2]]),
    2: (data, index) =>
      (data[data[index + 3]] = data[data[index + 1]] * data[data[index + 2]]),
  };

  for (let index = 0; index < data.length; index += 4) {
    if (data[index] === 99) return data;

    operations[data[index]](data, index);
  }

  return data;
};

const findInputsForTarget = (originalData, target) => {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const data = [...originalData];
      data[1] = noun;
      data[2] = verb;

      if (intCodeExecution(data)[0] === target) return 100 * noun + verb;
    }
  }

  return -1;
};

const main = () => {
  const data = [
    1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 19, 2, 9, 19, 23,
    2, 23, 10, 27, 1, 6, 27, 31, 1, 31, 6, 35, 2, 35, 10, 39, 1, 39, 5, 43, 2,
    6, 43, 47, 2, 47, 10, 51, 1, 51, 6, 55, 1, 55, 6, 59, 1, 9, 59, 63, 1, 63,
    9, 67, 1, 67, 6, 71, 2, 71, 13, 75, 1, 75, 5, 79, 1, 79, 9, 83, 2, 6, 83,
    87, 1, 87, 5, 91, 2, 6, 91, 95, 1, 95, 9, 99, 2, 6, 99, 103, 1, 5, 103, 107,
    1, 6, 107, 111, 1, 111, 10, 115, 2, 115, 13, 119, 1, 119, 6, 123, 1, 123, 2,
    127, 1, 127, 5, 0, 99, 2, 14, 0, 0,
  ];

  console.log(intCodeExecution(data));

  console.log(findInputsForTarget(data, 19690720));
};

main();
