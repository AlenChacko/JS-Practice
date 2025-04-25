// 'use strict'  // undefined
console.log(this) // global obj

function greet (){
    console.log(this)  //global obj
}

greet()