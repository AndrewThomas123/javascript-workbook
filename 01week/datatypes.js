// Write a JavaScript program to display the current day and time.
let dateAndTime = () =>{
  let now = new Date()
    console.log("1. "+ now)
}
dateAndTime()
// Write a JavaScript program to convert a number to a string.
let numberToString = (y) =>{
  let j= y.toString();
  console.log(j)
}
numberToString(34809)


// Write a JavaScript program to convert a string to the number.
let convertToNum= (u)=> {
  if (typeof u === 'string'){
    let h= Number.parseInt(u)
    console.log(h)
  }

}
convertToNum('123')

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

let dt = (a) => {
  if (typeof a=== 'boolean'){
    console.log('a is a Boolean');
  }else if ( typeof a === 'undefined'){
    console.log('a is undefined');
  } else if (typeof a==='string'){
    console.log('a is a string')
  } else if ( isNaN(a)){
    console.log('This is NaN')
  } else if (typeof a === 'number'){
    console.log('a is a number!');
  } else if (a === null ){
    console.log('a is null')
  }
}
dt(NaN);
dt(true);
dt(null);
dt(undefined);
dt(12);
dt('hello');

// Write a JavaScript program that adds 2 numbers together.
// function that adds the arguments together
let multByTwo = (h,j) => {
  console.log(h+j);
};
multByTwo(4,3);

// Write a JavaScript program that runs only when 2 things are true.
// function that recieves two items, if those two things are true
// methods: function, 2 arguments, if/then statements
let evaluatesToTrue=(arg1, arg2) =>{
  if (arg1 && arg2){
    return "both are true";
  }else {
    return "nope";
  }
};
let answer = evaluatesToTrue(1,2);
console.log(answer)
// Write a JavaScript program that runs when 1 of 2 things are true.
let evaluatesOneTrue=(arg1, arg2) =>{
  if(arg1 || arg2){
    return "at least one is true";
  }{
    return "neither are true";
  }
};
let repond = evaluatesOneTrue(1,0);
console.log(repond)
// Write a JavaScript program that runs when both things are not true.
let evaluatesWhenFalse= (arg1, arg2) => {
  if (!arg1 && !arg2){
    return "neither are true";
  } else
    return "one or both are true";
};
let i = evaluatesWhenFalse(0,0)
console.log(i)
