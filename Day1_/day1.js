const readModuleMasses = () => {
  const data = Deno.readTextFileSync("./data/data.txt");
  return data.split("\n").map(Number);
};
const calculateFuelForModules = (moduleMasses) =>
  moduleMasses.map((mass) => Math.floor(mass / 3) - 2);

const sum = (acum, value) => acum + value;

const calculateTotalFuel = () => {
  const moduleMasses = readModuleMasses();
  const fuelRequirements = calculateFuelForModules(moduleMasses);
  const totalFuel = fuelRequirements.reduce(sum, 0);
  return totalFuel;
};

console.log(calculateTotalFuel());
