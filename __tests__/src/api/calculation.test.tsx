// import Calculation from "@/api/calculation";
import Calculation from "../../../src/api/calculation";

describe("Calculation", () =>{
    // Create an instance of the Calculator
    const calculation = new Calculation(2, 3);

    calculation.currentOperand = "12345";

    test("defines testAdd(a, b)", () => {
        expect(calculation.testAdd(2, 3)).toBe(5);
    });


    describe('delete', () => {
        it('should delete the last character from the current operand', () => {
    
          // Set the initial current operand
          calculation.currentOperand = "12345";
    
          // Call the delete() method
          calculation.delete();
    
          // Check if the last character has been deleted
          expect(calculation.currentOperand).toBe("1234");
        });
    });


    describe('appendNumber', () => {
        it('should append the number to the current operand', () => {
          // Set the initial current operand
          calculation.currentOperand = "123";
    
          // Call the appendNumber() method with a number
          calculation.appendNumber(4);
    
          // Check if the number has been appended to the current operand
          expect(calculation.currentOperand).toBe("1234");
        });
    
        it('should not append a decimal point if current operand already contains one', () => {
          // Set the initial current operand
          calculation.currentOperand = "3.14";
    
          // Call the appendNumber() method with a decimal point
          calculation.appendNumber('.');
    
          // Check if the current operand remains unchanged
          expect(calculation.currentOperand).toBe("3.14");
        });
    });  



    describe('chooseOperation', () => {
        it('should set the operation and update previous and current operands', () => {
          // Set the initial current operand
          calculation.currentOperand = "10";
    
          // Set the initial previous operand
          calculation.previousOperand = "5";
    
          // Call the chooseOperation() method with an operation
          calculation.chooseOperation('+');
    
          // Check if the operation is set correctly
          expect(calculation.operation).toBe('+');
    
          // Check if the previous and current operands are updated correctly
          expect(calculation.previousOperand).toBe("10");
          expect(calculation.currentOperand).toBe("");
        });
    
        it('should do nothing if the current operand is empty', () => {
          // Set the initial current operand to an empty string
          calculation.currentOperand = "";
    
          // Set the initial previous operand
          calculation.previousOperand = "5";
    
          // Call the chooseOperation() method with an operation
          calculation.chooseOperation('*');
    
          // Check if the operation remains unchanged
          expect(calculation.operation).toBeUndefined();
    
          // Check if the previous and current operands remain unchanged
          expect(calculation.previousOperand).toBe("5");
          expect(calculation.currentOperand).toBe("");
        });
    
        it('should call the compute() method if the previous operand is not empty', () => {
          
          // Set the initial current operand
          calculation.currentOperand = "5";
    
          // Set the initial previous operand
          calculation.previousOperand = "10";
    
          // Mock the compute() method
          calculation.compute = jest.fn();
    
          // Call the chooseOperation() method with an operation
          calculation.chooseOperation('/');
    
          // Check if the compute() method is called
          expect(calculation.compute).toHaveBeenCalled();
    
          // Check if the operation is set correctly
          expect(calculation.operation).toBe('/');
    
          // Check if the previous and current operands are updated correctly
          expect(calculation.previousOperand).toBe("5");
          expect(calculation.currentOperand).toBe("");
        });
    });



    
})