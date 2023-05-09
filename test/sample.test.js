const {sum, subtract, Validator} = require('../src/sample');

test('properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
});

test('properly adds two numbers', () => {
    expect(subtract(1, 2)).toBe(-1)
});

describe("Validator", () => {
    const validator = new Validator();
  
    test("defines setRule()", () => {
      expect(typeof validator.setRule).toBe("function");
    });

    test("setRule() returns undefined when called", () => {
        expect(validator.setRule()).toBeUndefined();
    });
});