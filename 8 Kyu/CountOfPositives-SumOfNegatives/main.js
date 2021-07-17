function countPositivesSumNegatives(input) {
  let value1 = 0, value2 = 0;
  if (input === null || input.length < 1) return [];
  input.forEach(e => (e > 0) ? value1++ : value2 += e);
  return [value1, value2];
}

let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let actual = countPositivesSumNegatives(testData);
let expected = '[8, -50]';

console.log(actual + ' - ' + expected);