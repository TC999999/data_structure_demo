const { Stack } = require("./stack");

// Checks to see if a string has brackets balanced
function balancedBrackets(string) {
  let bracketStack = new Stack();
  let openingBracket = ["(", "[", "{"];
  let closingBracket = [")", "]", "}"];
  let completeBrackets = ["()", "[]", "{}"];
  for (let letter of string) {
    if (openingBracket.includes(letter)) {
      bracketStack.push(letter);
    } else if (closingBracket.includes(letter)) {
      if (bracketStack.isEmpty()) {
        return false;
      }
      let bracketString = bracketStack.pop() + letter;
      if (!completeBrackets.includes(bracketString)) {
        return false;
      }
    }
  }
  if (!bracketStack.isEmpty()) {
    return false;
  }
  return true;
}

module.exports = { balancedBrackets };
