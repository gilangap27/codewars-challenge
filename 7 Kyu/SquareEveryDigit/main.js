function squareDigits(num) {
  return Number(num.toString().split('').map(e => Math.pow(e, 2)).join(''))
}

console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);