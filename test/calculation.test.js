const { Calculation } = require('../src/js/calculation');

describe("Calculation", () =>{
    const calculation = new Calculation();

    test("defines testAdd(a, b)", () => {
        expect(calculation.testAdd(2, 3)).toBe(5);
    });

    test("delete single item", () => {
        expect(calculation.delete()).toBe(1)
    })
})