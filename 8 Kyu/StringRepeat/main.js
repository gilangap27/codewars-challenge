function repeatStr(n, s) {
  // let result = '';
  // for (let i = 1; i <= n; i++) result += s;
  // return result;
  return s.repeat(n);
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");