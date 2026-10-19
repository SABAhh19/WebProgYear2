const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const div = (a, b) => a / b;

const numbers = [1, 2, 3, 4, 5];

const change = numbers.map((num) => num * 2);

function mapper(array, callback) {
  const diffNum = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const changed = callback(element);
    diffNum.push(changed);
  }
  return diffNum;
}
