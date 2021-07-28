function filter_list(l) {
  // let arr = [];
  // l.forEach(e => {
  //   if (Number.isInteger(e)) arr.push(e)
  // });
  // return arr
  return l.filter(e => Number.isInteger(e))
}

console.log(filter_list([1, 2, 'a', 'b']), [1, 2])
console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15])
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123])