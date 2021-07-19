const reverseSeq = n => {
  let result = []
  for (let i = n; i > 0; i--) result.push(i)
  return result
};

console.log(reverseSeq(7), [5, 4, 3, 2, 1]);