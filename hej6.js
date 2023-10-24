const printCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
};

console.log(printCurrentTime());

const myName = (name) => {
  console.log("Miguel");
};

myName();

const printGreeting = (name) => {
  console.log(`Hello ${name}`);
};

printGreeting("Bob");
printGreeting("Sue");

const first = () => {
  return 2 * 2;
};

console.log(first());

const second = () => {
  return 100 * 4;
};

console.log(second());

const warmEnough = (temp) => {
  return temp > 10;
};

if (warmEnough(15)) {
  console.log("Go for a run!");
}
