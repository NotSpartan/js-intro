/* printLines();
function printLines() {
  console.log(secondLine);

  var firstLine = "I am your first line";
  console.log(firstLine);

  var secondLine = "I am your second line";
  console.log(secondLine);
} */
//********************************************************************************************************* */
// What will be the result of first console.log() and why?
// undefined, because all variables inside the function are hoisted/lifted. Because secondLine variable is called before its declared, its value will be undefined and no error will be thrown.

// What will be the result of the seocnd console.log() and why?
// I'm your first line! - everything is correct, variable is called after its declared.

// What will be result of the third console.log() and why?
// I'm your second line! - everything is correct, variable is called after its declared.

// What will happen if we invoke function printLines() before its declared and why this happens?
// Everything will work like when we invoked printLines() function after the declaration,
//because function declarations are hoisted/lifted on the same way like the variables.
//********************************************************************************************************* */

/* 
var printLines = function () {
  console.log(secondLine);

  var firstLine = "I am your first line";
  console.log(firstLine);
  var secondLine = "I am your first line";
  console.log(secondLine);
};
printLines();
*/

/* 
printLines();

const printLines = function () {
  console.log(secondLine);

  let firstLine = "I am your first line";
  console.log(firstLine);
  let secondLine = "I am your first line";
  console.log(secondLine);
};
*/
//********************************************************************************************************* */

/* 
const madeOfGlass = function () {
  const thing = "window";
  thing = "glass";

  console.log(thing);
};
madeOfGlass();

//Object destructuring
const dog ={
    breed: "Golden retriver",
    age: 12,
};

const{breed, age} = dog;
console.log(breed);
console.log(age);

//Array destruction
const firstArray = ["a", "b", "c"];
const [prvi, drugi, treci, cetvrti] = firstArray;
console.log(prvi);
console.log(drugi);
console.log(treci);
console.log(cetvrti);

//Complex object destruturing
const car = {
    name:"Ferrari",
    country:"IT",
    dimensions:{
        width: 550,
        height: 120,
    },
};
const{
    name, 
    country, 
    dimensions: {width, height},
}= car;

console.log(name);
console.log(country);
console.log(width);
console.log(height);

*/

/* 
function arrayMachine(firstArray, secondArray) {
  let finalArray = firstArray.concat(secondArray);
  let prazniArray = [];

  for (let i of finalArray) {
    if (prazniArray.indexOf(i) == -1) {
      prazniArray.push(i);
    }
  }
  console.log(prazniArray);
}

const first = ["a", "b", "c"];
const second = ["k", "b", "m"];
const prvi = [1, 2, 3];
const drugi = [4, 5, 1];

arrayMachine(first, second);
arrayMachine(prvi, drugi);
*/
//ili

/* 
const firstArray = ["a", "b", "c"];
const secondArray = ["k", "b", "m"];

const arrayMachine = function (first, second) {
  let finalArray = first.concat(second);
  finalArray = [...new Set(finalArray)];
  console.log(finalArray);
  finalArray.sort();
  console.log(finalArray);

  finalArray.reverse();
  console.log(finalArray);
};

arrayMachine(firstArray, secondArray);
*/

/*
setInterval(() => {
  console.log("Jako sam pametan");
}, 3000);

function sendEmail() {
  const alertMessageEl = document.querySelector(".alert-message");

  alertMessageEl.style.display = "block";

  setTimeout(() => {
    alertMessageEl.style.display = "none";
  }, 3000);
}
*/

/*
var f = document.querySelector("#body");
var h1 = document.createElement("h1");
document.prepend(h1);

var k = document.getElementsByClassName("description");
var l = document.createElement("div");
l.className = "info";
k.appendChild(l);
const footer = document.querySelector("footer");
const ul = footer.querySelector("ul");

const lis = [...Array[5]].map(() => {
  const li = document.createElement("li");
  li.textContent = "List item";
  return li;
});

lis.forEach((li) => URL.appendChild(li));
*/

const descriptionEl = document.querySelector(".description");
const footerEl = document.querySelector("#footer");
const ulEl = document.querySelector("ul");

const h1 = document.createElement("h1");
h1.innerText = "Pametni smo";
descriptionEl.parentNode.prepend(h1);

const infoDiv = document.createElement("div");
infoDiv.classList.add("info");
footerEl.parentNode.insertBefore(infoDiv, footerEl);

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  ulEl.appendChild(li);
}
