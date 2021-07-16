function countSheeps(arrayOfSheep) {
  let hasil = 0;
  arrayOfSheep.forEach(e => {
    if (e == true) hasil++;
  });
  return hasil;
}

var array1 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];

console.log(countSheeps(array1), 17, "There are 17 sheeps in total")