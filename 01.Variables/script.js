// 1. VAR Declarations

var x = 10;
var x = 20; // can be redeclare with same name
x = 40; // can be change the value
console.log(x); // this will print 40, the last value assigned to X

// VAR Hoisting

console.log(student); // this will print undefined
var student = "alen";
console.log(student); // this will print name

console.log(`#############################################################`)

// 2. LET Declarations

let studentName = "Alen";
// let studentName = "Amal";  this will be syntax error, let variable cannot redeclare with same name
studentName = "Amal"; // This will change the value of studentName from Alen to Amal
console.log(studentName); // will print studentName Amal

// console.log(person)  this will be reference error that let cannot be accessed before initialization
// because of Temporal Dead Zone (TDS)
let person = "Mathew";

let work;
console.log(work); // will get undefined

console.log(`#############################################################`)

// 3. CONST Declarations

const subject = "Maths";
subject = "Physics"; //This will be a type error. A const variable connot be changed;

// const profession;  This will be a syntax error, const should be initialzed at declarations
