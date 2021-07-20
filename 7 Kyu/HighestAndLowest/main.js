function highAndLow(numbers) {
  let arr = numbers.split(' ')
  return Math.max(...arr) + ' ' + Math.min(...arr)
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");