let x = 30;
let y = x;                // 30 will be copied to y

// console.log(x, y)

x = 100;

// console.log(x, y)


const obj1 = {
    name:"alen",
    age:26
}

const obj2 = obj1
obj2.age = 34
console.log(obj1,obj2)