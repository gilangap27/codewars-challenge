
function findSmallestInt(args) {
  // let small = args[0];
  // for (let i = 0; i < args.length; i++) {
  //   if (small > args[i]) small = args[i];
  // }
  // return small;
  return Math.min(...args);
}

console.log(findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
console.log(findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
console.log(findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
console.log(findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
console.log(findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');