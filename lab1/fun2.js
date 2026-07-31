const F1 = () => {
  console.log("F1");
};
const F2 = () => {
  console.log("F2");
};
const F3 = () => {
  console.log("F3");
};

function main() {
  console.log("main😊");
  setTimeout(F1, 0);
  setImmediate(F2);
  //setInterval(F1, 10000);
  process.nextTick(F3);
  F3();
  console.log("End✈️");
}
main();
