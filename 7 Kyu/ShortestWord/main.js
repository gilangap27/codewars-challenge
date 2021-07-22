function findShort(s) {
  arr = s.split(' ');
  let min = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i].length) {
      min = arr[i].length;
    }
  }
  return min;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("Let's travel abroad shall we"), 2);