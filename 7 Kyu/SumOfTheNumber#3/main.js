function getSum(a, b) {
  let result = 0;
  if (a > b) for (let i = a; i >= b; i--) result += i
  else for (let i = a; i <= b; i++) result += i

  return result
}

console.log(getSum(0, -3), -6);
console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(0, 3), 6);