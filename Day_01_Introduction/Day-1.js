//Day 1

// Use Quooka for view the results.

/* the 'console.log' is used for view the codes in your browser, your need 
 to pass parameters in your '()' for view the results */

console.log('hello word')

// more than one paramenters

console.log('Hello Word', 'My name is Gabriel', 'God bless the america')

// Diferents quotes

console.log('Hello word')
console.log("Hello word")
console.log(`Hello Word`)

// Mathematical calculations

console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Tree square

// for create a 'alert' (in html):
// <button onclick="alert('Welcome to 30 days of JavaScript... or not');">Click me</button

// Open script in Html, use inside of body: <script> console.log() </script>
// External Script, use inside of body: <script scr="Day-1.js"></script>

// Primitive data Types of JavaScript: String, Number, Boolean, undefined, Null, and Symbol

console.log(typeof 'Gabriel')
console.log(typeof 3)
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)

// Variables - var , let , const
// It is not recommended using var, because it's error prone

// Valid variables of JavaScript

let firstname;
let first_name;
let _firstname;
let $firstname;
let $firt_name;    

// Declaring variables

// let nameOfVariable = value;

let firstName = 'Gabriel';
let lastName = 'Reguera';
let age = 19;
let isBeautiful = true;

console.log(firstName, lastName, age, isBeautiful)


// Variables numbers

let age2 = 18;
let gravity = 9.81;
const PI = 3.14;

console.log(age2, gravity, PI)

// Variable in one line.

let name = 'Gabriel', levelHungry = 1000, yes = true;

console.log(name, levelHungry, yes)


//
//  EXERCISES
//

//--1
console.log('comments can make code readable')

//--2
console.log('Welcome to 30DaysOfJavaScript')

//--3
console.log('comments can make code readable', 'easy to reuse and informative')

//--4

let firstNamee = 'Gabrielito';
let number = 47;
const final = 'Final Boss';
let isInteligent = true;
let iDontKnow = undefined;

//--5

console.log(typeof firstNamee)
console.log(typeof 'firstNamee')
console.log(typeof number)
console.log(typeof 47)
console.log(typeof isInteligent)
console.log(typeof true)
console.log(typeof iDontKnow)
console.log(typeof a)

//-- 6

let day;
var week;
const mounth = 1; // 'Const' need assigned data to work
let year;

//-- 7

let dayy = 04;
var weekk = 1.2;
let mounthh = 07;
let yearr = `2022`;

//-- 8

let _first_name = 'Gabriel';
let _last_name = 'Reguera';
let marital_status = false;
let $country = 'Brazil';
let _age = 19;

//-- 9

let firstName_my = 'Gabriel', lastName_my = 'Reguera', maritalStatus = false, country = 'Brazil', agee = 1.9;

//-- 10

let myAge = 19;
let yourAge = 30;

console.log('I am ' + myAge + ' years old.')
console.log('You are ' + yourAge + ' years old.')
