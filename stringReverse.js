// Reverses a string using a stack

function stringReverse(string) {
  const letterStack = new Stack();
  for (let letter of string) {
    letterStack.push(letter);
  }

  let revString = "";
  while (letterStack.size) {
    revString = revString + letterStack.pop();
  }
  return revString;
}
