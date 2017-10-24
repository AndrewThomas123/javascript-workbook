'use strict';
let cars = ['focus','st', 'fiesta', 'model s'];
let carslength= cars.length;
console.log("this prints the array length of cars" + carslength);
 let morecars = ['cars', 'more cars', 'more cars', 'even'];
let eevenmorecars = cars.concat(morecars);
console.log("this adds two arrays together"+eevenmorecars);
console.log("this prints the location of model s in the array"+cars.indexOf('model s'));
console.log("this prints the last index of focus inthe array"+cars.lastIndexOf('focus'));
let hi = eevenmorecars.join();
console.log(hi);
 eevenmorecars= hi.split(',');
console.log(eevenmorecars);
let carsinreverse = eevenmorecars.reverse();
console.log(carsinreverse);
let carssort= carsinreverse.sort();
console.log(carsinreverse.indexOf('cars'))
let removedcars= carsinreverse.slice(0,7)
console.log(removedcars)
let carsspliced=carsinreverse.splice(0,2,'ford','honda')
console.log(carsspliced)
console.log(carsinreverse)
carsinreverse.push('cars','even')
console.log(carsinreverse)
carsinreverse.pop()
console.log(carsinreverse)
let b =carsinreverse.shift()
console.log(b)
carsinreverse.unshift('shift')
let numbers = [23, 45, 0, 2]
numbers.forEach(function(element) {
    console.log(element + 2);
})
