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

let startStackLastNumner = stacks[startStack].last()
let endStacksLastNumber = stacks[endStack].last()

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack) {
  // Your code here
  if (startStack=== a && endStack=== b){
    endStack.push(endStacksLastNumber)
  } else if (startStack=== a && endStack=== c){
    endStack.push(endStacksLastNumber)
  } else if (startStack=== b && endStack=== a){
    endStack.push(endStacksLastNumber)
  } else if(startStack=== b && endStack=== c){
    endStack.push(endStacksLastNumber)
  } else if (startStack=== c && endStack=== a){
    endStack.push(endStacksLastNumber)
  } else if (startStack=== c && endStack=== b){
    endStack.push(endStacksLastNumber)
  }


}

function isLegal(startStack,endStacks) {
  // Your code here
 if (startStackLastNumner< endStacksLastNumber){
   return true
 } else{
   return false
 }
}

function checkForWin() {
  // Your code here
  if (stacks.c.length === 4){
    return true
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if(isLegal(startStack,endStack)){
    movePiece(startStack,endStack)
    checkForWin()
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
