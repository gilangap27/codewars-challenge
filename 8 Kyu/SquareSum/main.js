function squareSum(numbers) {
  let hasil = 0;
  numbers.forEach(e => {
    hasil += Math.pow(e, 2);
  });
  return hasil;
}

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);