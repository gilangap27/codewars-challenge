function abbrevName(name) {
  // let result = [];
  // let arr = name.split(' ');
  // arr.forEach(e => result.push(e.charAt(0)));
  // return result.join('.').toUpperCase();

  return name.split(' ').map(e => e.charAt(0).toUpperCase()).join('.');
  // return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
console.log(abbrevName("David Mendieta Toppela"), "D.M.T");