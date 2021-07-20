function getMiddle(s) {
  return (s.length % 2) ? s.substr(s.length / 2, 1) : s.substr((s.length / 2) - 1, 2);
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");