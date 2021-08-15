function swapVowelCase(str) {
  let arr = str.split('');
  arr.forEach((e, i) => {
    if (e == 'A') { arr[i] = 'a' }
    if (e == 'I') { arr[i] = 'i' }
    if (e == 'U') { arr[i] = 'u' }
    if (e == 'E') { arr[i] = 'e' }
    if (e == 'O') { arr[i] = 'o' }

    if (e == 'a') { arr[i] = 'A' }
    if (e == 'i') { arr[i] = 'I' }
    if (e == 'u') { arr[i] = 'U' }
    if (e == 'e') { arr[i] = 'E' }
    if (e == 'o') { arr[i] = 'O' }
  });
  return arr.join('')
}

console.log(swapVowelCase(" "), " ");
console.log(swapVowelCase("C Is AlIvE!"), "C is alive!");
console.log(swapVowelCase("to"), "tO");
console.log(swapVowelCase("The"), "ThE");