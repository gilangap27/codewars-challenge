var summation = function (num) {
  // let result = 0;
  // for (let i = 1; i <= num; i++) {
  //   result += i;
  // }
  // return result;
  return num * (num + 1) / 2;
}

console.log(summation(1), 1);
console.log(summation(8), 36);