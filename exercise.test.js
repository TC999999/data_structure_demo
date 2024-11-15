const { stringReverse } = require("./stringReverse");
const { balancedBrackets } = require("./brackets");
const { calc } = require("./calculator");
const { JosephusSurvivor } = require("./joseph");

describe("stack and queue uses examples", function () {
  test("string reverse", function () {
    expect(stringReverse("This string should be reversed!")).toEqual(
      "!desrever eb dluohs gnirts sihT"
    );
  });

  test("returns if a string has balanced brackets", function () {
    expect(balancedBrackets("[hello]")).toBe(true);
    expect(balancedBrackets("[(hello)]")).toBe(true);
    expect(balancedBrackets("[(hello])")).toBe(false);
    expect(balancedBrackets("[(hello)")).toBe(false);
  });

  test("returns calculator result using polish notation", function () {
    expect(calc("+ 1 2")).toEqual(3);
    expect(calc("* 2 + 1 2")).toEqual(6);
    expect(calc("+ 9 * 2 3")).toEqual(15);
    expect(calc("- 1 2")).toEqual(-1);
    expect(calc("- 9 * 2 3")).toEqual(3);
    expect(calc("/ 6 - 4 2")).toEqual(3);
  });

  test("calculator throws an error if anything other than a number or a mathematical operator is used", function () {
    expect(() => calc("# 1 2")).toThrow(
      "The first expression of the string must be a mathematical operator"
    );

    expect(() => calc("+ one 2")).toThrow(
      "Please only input either a number or a mathematical operator"
    );

    expect(() => calc("+ 1 two")).toThrow(
      "The last expression of the string must be a number"
    );
  });

  test("calculator throws an error if the there are too many operators in the expression", function () {
    expect(() => calc("- + 1 - 2")).toThrow(
      "There are too many operators in the expression"
    );

    expect(() => calc("- * + 1 2")).toThrow(
      "There are too many operators in the expression"
    );
  });

  test("calculator throws an error if there are not enough operators in the expressions", function () {
    expect(() => calc("* 3 4 + 1 2")).toThrow(
      "There are not enough operators in the expression"
    );

    expect(() => calc("1 2")).toThrow(
      "The first expression of the string must be a mathematical operator"
    );
  });

  test("calculator throws an error if the last expression of the inputted string is not a number", function () {
    expect(() => calc("1 2 +")).toThrow(
      "The last expression of the string must be a number"
    );
  });

  test("calculator throws an error if the first expression of the inputted string is not a mathematical operator", function () {
    expect(() => calc("1 + 2")).toThrow(
      "The first expression of the string must be a mathematical operator"
    );
  });

  test("josephus survivor algorithm works", function () {
    expect(JosephusSurvivor(10, 3)).toEqual(4);
    expect(JosephusSurvivor(5, 2)).toEqual(3);
    expect(JosephusSurvivor(7, 3)).toEqual(4);
  });
});
