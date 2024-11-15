const { Stack } = require("./stack");

// Uses polish notation to solve a simmple math problem
function calc(calcStr) {
  let calcArr = calcStr.split(" ");
  const numExp = /[0-9]/;
  const expExp = ["+", "-", "*", "/"];
  if (!numExp.test(calcArr[calcArr.length - 1])) {
    throw new Error("The last expression of the string must be a number");
  }
  if (!expExp.includes(calcArr[0])) {
    throw new Error(
      "The first expression of the string must be a mathematical operator"
    );
  }
  let numS = new Stack();
  let signS = new Stack();

  for (let char of calcArr) {
    if (numExp.test(char)) {
      numS.push(char);
    } else if (expExp.includes(char)) {
      signS.push(char);
    } else {
      throw new Error(
        "Please only input either a number or a mathematical operator"
      );
    }
  }

  if (numS.size <= signS.size) {
    throw new Error("There are too many operators in the expression");
  } else if (signS.size !== numS.size - 1) {
    throw new Error("There are not enough operators in the expression");
  }

  let finalNum = parseFloat(numS.pop());

  // console.log(finalNum);
  while (numS.size && signS.size) {
    let popNum = parseFloat(numS.pop());
    let popSign = signS.pop();
    if (popSign === "+") {
      finalNum = popNum + finalNum;
    } else if (popSign === "-") {
      finalNum = popNum - finalNum;
    } else if (popSign === "*") {
      finalNum = popNum * finalNum;
    } else if (popSign === "/") {
      finalNum = popNum / finalNum;
    } else {
      throw new Error("Could not understand expression");
    }
  }

  return finalNum;
}

module.exports = { calc };
