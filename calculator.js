// Uses polish notation to solve a simmple math problem
// calc ("+ 1 2"):  1 + 2 = 3
// calc("* 2 + 1 2"): 2 * (1 + 2) = 6
// calc("+ 9 * 2 3"): 9 + (2 * 3) = 15
// calc("- 1 2"): 1 - 2 = -1
// calc("- 9 * 2 3"): 9 - (2 * 3) = 3
// calc("/ 6 - 4 2"): 6 / (4 - 2) = 3

function calc(calcStr) {
  let calcArr = calcStr.split(" ");
  let numS = new Stack();
  let signS = new Stack();

  const numExp = /[0-9]/;
  const expExp = ["+", "-", "*", "/"];

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

  let finalNum = parseFloat(numS.pop());
  if (!numExp.test(finalNum)) {
    throw new Error("The last expression of the string must be a number");
  }
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
