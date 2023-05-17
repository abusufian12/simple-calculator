import cal_styles from './calculator.module.css'

export default function Calculator() {
  return (
        <div  className={`cal_styles.calculator-grid`}>
          <div className={cal_styles.output}>
            <div data-previous-operand className={`cal_styles.previous-operand`}></div>
            <div data-current-operand className={`cal_styles.current-operand`}></div>
          </div>
          <button data-all-clear className={`cal_styles.span-two`}>AC</button>
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
          <button data-equals className={`cal_styles.span-two`}>=</button>
        </div>
  )
}
