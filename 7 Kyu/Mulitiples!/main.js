function multiple(x) {
  if(x % 3 == 0 && x % 5 == 0){
    return 'BangBoom'
  } else if(x % 3 == 0){
    return 'Bang'
  } else if(x % 5 == 0){
    return 'Boom'
  } else {
    return 'Miss'
  }
}

console.log(multiple(30), "BangBoom")
console.log(multiple(3), "Bang")
console.log(multiple(98),"Miss")
console.log(multiple(65),"Boom")
console.log(multiple(23),"Miss")
console.log(multiple(15),"BangBoom")