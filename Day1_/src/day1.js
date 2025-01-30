const readModuleMasses = (filePath) => {
  const data = Deno.readTextFileSync(filePath);
  return data.split("\n").map(Number);
};

const calculateFuelForModule = (mass) => Math.floor(mass / 3) - 2;

const sum = (acum, value) => acum + value;

const calculateTotalFuel = () => {
  const moduleMasses = readModuleMasses("../data/data.txt");
  const totalFuel = moduleMasses.map(calculateFuelForModule).reduce(sum, 0);
  return totalFuel;
};

console.log(calculateTotalFuel());

// --------------- Part Two -----------------

const getFuel = (mass) => {
  const fuel = calculateFuelForModule(mass);
  if (fuel <= 0) return 0;
  return fuel + getFuel(fuel);
};

const computeTotalFuel = () => {
  const moduleMasses = readModuleMasses("../data/data.txt");
  const totalFuel = moduleMasses.map(getFuel).reduce(sum, 0);
  return totalFuel;
};

console.log(computeTotalFuel());
