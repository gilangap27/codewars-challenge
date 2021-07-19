
function getCount(str) {
  return (/[aiueo]/gi.test(str)) ? str.match(/[aiueo]/gi).length : 0;
}

console.log(getCount("sayaka"), 6)