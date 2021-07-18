
function find_average(array) {
  let result = 0;
  if (array != null) {
    array.forEach(e => result += e);
    return result / array.length;
  }
  return 0;
}

console.log(find_average([1, 1, 1]), 1);
console.log(find_average([1, 2, 3]), 2);
console.log(find_average([1, 2, 3, 4]), 2.5);

