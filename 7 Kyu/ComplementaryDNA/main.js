function DNAStrand(dna) {
  let arr = dna.split('')
  return arr.map(e => {
    switch (e) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
    }
  }).join('');
}

console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is")
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is")
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is")