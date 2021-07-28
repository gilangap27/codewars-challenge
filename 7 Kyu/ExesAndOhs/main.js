function XO(str) {
  let arr = str.toLowerCase().split(''), x = 0, o = 0;
  arr.forEach(e => {
    if (e == 'x') x++
    else if (e == 'o') o++
  });
  return x == o
}

console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);