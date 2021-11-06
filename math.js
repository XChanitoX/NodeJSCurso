const Math = {};

function add(x1, x2) {
  return x1 + x2;
}

function substract(x1, x2) {
  return x1 - x2;
}

function multiply(x1, x2) {
  return x1 * x2;
}

function divide(x1, x2) {
  if (x2 == 0) {
    console.log("No se puede dividir por 0");
  } else {
    return x1 / x2;
  }
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;

/*

------- Index.js -------
const math = require("./math.js"); 

console.log(math);

console.log(math.add(1,0));
console.log(math.substract(10,5));
console.log(math.multiply(1, 0));
console.log(math.divide(1, 0));

*/