let carsinreverse = ['tesla', ' porsche', ' ferarri',];
for (let x = 0; x < carsinreverse.length ; x++){
  console.log(carsinreverse[x])
}

var humans = {firstName:"Jane", lastName : "Doe", birthDate: "Jan 5, 1925", gender: "female" }
for ( x in humans){
  console.log(x)
}
var s = ""
for (var value in humans) {
    s +=  humans[value];
    console.log(s)
    }
let number = 0
while( number <= 1000){
  number ++
  console.log(number)
}
let numberr = 0
do {
  numberr ++
  console.log(numberr)
} while(numberr <1000)
