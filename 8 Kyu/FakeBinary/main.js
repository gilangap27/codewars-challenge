function fakeBin(x) {
  // let hasil = '';
  // x.split('').forEach(e => { (e < 5) ? hasil += '0' : hasil += '1'; });
  // return hasil;

  return x.split('').map(e => (e < 5) ? 0 : 1).join('');
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');