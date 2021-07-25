function hero(bullets, dragons) {
  if (bullets == 0 && dragons == 0) return true
  return ((bullets / dragons) >= 2)
}

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);
console.log(hero(0, 0), true);