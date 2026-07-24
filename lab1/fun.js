//waf to take a digit (0-9) and return its in word

const toWords = (digit) => {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return words[digit];
};

console.log(toWords(2));
console.log(toWords(3));
console.log(toWords(4));
console.log(toWords(5));
