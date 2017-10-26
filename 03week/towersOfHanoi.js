'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};



function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack) {
  // Your code here
  console.log('i am in movePiece')
  stacks[startStack.length-1]
  let startStackLastNumner = stacks[startStack.length-1]
  let endStacksLastNumber = stacks[endStack.length-1]
  let o = stacks[startStack]
  let p = o.pop()
  let a = stacks[endStack]
    a.push(p)



}

function isLegal(startStack,endStack) {
  // Your code here
  console.log('i am in islegal')
  let t = stacks[startStack]
  let y= t[t.length-1]
//  console.log(y)
//  console.log('i am right after start stacks last numner')
  let u =stacks[endStack]
  let i = u[u.length-1]
  //console.log(i)
//console.log(' i am after endstackslast number ')
 if (y< i || i==undefined){
   return true
   console.log('i am after the if statement')
 } else{
   console.log('i am after the else')
   return false
 }
}

function checkForWin() {
  // Your code here
  console.log('i am in checkforwin')
  if (stacks['c'.length] === 4){
    return true
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if(isLegal(startStack,endStack)){
    movePiece(startStack,endStack)
    checkForWin()
  } if (checkForWin){
    console.log('you have won!')
  }

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();
