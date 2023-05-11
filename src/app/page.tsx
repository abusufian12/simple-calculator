"use client";
import { useState, useRef } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Calculation from '../api/calculation';

export default function Home() {

  
  if (typeof document !== 'undefined') {
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton: any = document.querySelector('[data-equals]')
  const deleteButton: any = document.querySelector('[data-delete]')
  const allClearButton: any = document.querySelector('[data-all-clear]')
  
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')

  const calculator = new Calculation(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerHTML)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerHTML)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
  })
}

const textInput: any = useRef(null);
function allClear() {
  console.log(textInput.current.value);
  // calculator.clear()
  // calculator.updateDisplay()
}
  return (
    <div  className={`calculator-grid`}>
      <div className={`output`}>
        <div data-previous-operand className={`previous-operand`}></div>
        <div data-current-operand className={`current-operand`}></div>
        <input type="text" ref={textInput} />
      </div>
      <button  onClick={allClear} data-all-clear className={`span-two`}>AC</button>
      <button data-delete>DEL</button>
      <button data-operation>÷</button>
      <button data-number>1</button>
      <button data-number>2</button>
      <button data-number>3</button>
      <button data-operation>*</button>
      <button data-number>4</button>
      <button data-number>5</button>
      <button data-number>6</button>
      <button data-operation>+</button>
      <button data-number>7</button>
      <button data-number>8</button>
      <button data-number>9</button>
      <button data-operation>-</button>
      <button data-number>.</button>
      <button data-number>0</button>
      <button data-equals className={`span-two`}>=</button>
    </div>
  )
}
