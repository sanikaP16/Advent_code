const readInput = (filePath) => {
  const data = Deno.readTextFileSync(filePath);
  return data.split("\n");
};

const movement = {
  R: [1, 0],
  L: [-1, 0],
  U: [0, 1],
  D: [0, -1],
};

const getSet = (instruction, visited, x, y) => {
  const [direction, steps] = [instruction[0], parseInt(instruction.slice(1))];

  for (let i = 0; i < steps; i++) {
    x += movement[direction][0];
    y += movement[direction][1];

    visited.add(`${x},${y}`);
  }

  return [x, y];
};

const getCoordinates = (wire) => {
  const visited = new Set();
  let [x, y] = [0, 0];

  const movements = wire.split(",");
  movements.forEach((move) => {
    [x, y] = getSet(move, visited, x, y);
  });

  return visited;
};
const getDistance = () => {};
const main = () => {
  const instructions = readInput("./input.txt");
  const [wire1, wire2] = instructions.map(getCoordinates);
  const intersection = wire1.intersection(wire2);
  console.log(intersection);
};

main();
