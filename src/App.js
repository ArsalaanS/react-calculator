import { useReducer } from "react";
import "./App.css"

// const ACTIONS = {
//   ADD_DIGIT: `add-digit`,
//   CHOOSE_OPERATION: `choose-operation`,
//   CLEAR: `clear`,
//   DELETE_DIGIT: `delete-digit`,
//   EVALUATE: `evaluate`
// }

// function reducer(state, {type, payload}){
//   switch(type) {
//     case ACTIONS.ADD_DIGIT:
//       return {
//         ...state,
//         currentOperand: `${currentOperand}${payload.digit}`
//       }
//   }
// }

// function App() {
//   const [currentOperand, previousOperand, operation, dispatch] = useReducer(reducer, {})
  
  
//   return (
//     <div className="calculator-container">
//       <div className="calculator-grid">
//         <div className="output">
//           <div className="current-operand">{currentOperand}</div>
//           <div className="previous-operand">{previousOperand}, {operation}</div>
//         </div>
//         <button onClick={handleClear}>AC</button>
//         <button onClick={() => handleButtonClick('1')}>del</button>
//         <button onClick={() => handleButtonClick('%')}>%</button>
//         <button onClick={() => handleButtonClick('/')}>/</button>
//         <button onClick={() => handleButtonClick('7')}>7</button>
//         <button onClick={() => handleButtonClick('8')}>8</button>
//         <button onClick={() => handleButtonClick('9')}>9</button>
//         <button onClick={() => handleButtonClick('*')}>x</button>
//         <button onClick={() => handleButtonClick('4')}>4</button>
//         <button onClick={() => handleButtonClick('5')}>5</button>
//         <button onClick={() => handleButtonClick('6')}>6</button>
//         <button onClick={() => handleButtonClick('-')}>-</button>
//         <button onClick={() => handleButtonClick('1')}>1</button>
//         <button onClick={() => handleButtonClick('2')}>2</button>
//         <button onClick={() => handleButtonClick('3')}>3</button>
//         <button onClick={() => handleButtonClick('+')}>+</button>
//         <button onClick={() => handleButtonClick('0')}>0</button>
//         <button onClick={() => handleButtonClick('.')}>.</button>
//         <button onClick={handleCalculate} className="span-two">=</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// Calculator.js (Functional Component)

import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleDel = () => {
    setInput(input.substring(0, (input.length)-1));
  }

  const handleClear = () => {
    setInput('');
    setPreviousInput('');
  };

  const handleCalculate = () => {
    try {
      setPreviousInput(input);
      setInput(String(eval(input)));
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    // <div>
    //   <input type="text" value={input} readOnly />
    //   <br />
    //   <button onClick={() => handleButtonClick('1')}>1</button>
    //   <button onClick={() => handleButtonClick('2')}>2</button>
    //   <button onClick={() => handleButtonClick('+')}>+</button>
    //   <button onClick={handleClear}>C</button>
    //   <button onClick={handleCalculate}>=</button>
    // </div>
    <div className="calculator-container">
       <div className="calculator-grid">
         <div className="output">
           {/* <div className="current-operand">123,45</div>
           <div className="previous-operand">123,45 *</div> */}
           <input className="current-operand" type="text" value={input} readOnly />
           <input className="previous-operand" type="text" value={previousInput} readOnly />
         </div>
         <button onClick={handleClear}>AC</button>
         <button onClick={handleDel}>del</button>
         <button onClick={() => handleButtonClick('%')}>%</button>
         <button onClick={() => handleButtonClick('/')}>/</button>
         <button onClick={() => handleButtonClick('7')}>7</button>
         <button onClick={() => handleButtonClick('8')}>8</button>
         <button onClick={() => handleButtonClick('9')}>9</button>
         <button onClick={() => handleButtonClick('*')}>x</button>
         <button onClick={() => handleButtonClick('4')}>4</button>
         <button onClick={() => handleButtonClick('5')}>5</button>
         <button onClick={() => handleButtonClick('6')}>6</button>
         <button onClick={() => handleButtonClick('-')}>-</button>
         <button onClick={() => handleButtonClick('1')}>1</button>
         <button onClick={() => handleButtonClick('2')}>2</button>
         <button onClick={() => handleButtonClick('3')}>3</button>
         <button onClick={() => handleButtonClick('+')}>+</button>
         <button onClick={() => handleButtonClick('0')}>0</button>
         <button onClick={() => handleButtonClick('.')}>.</button>
         <button onClick={handleCalculate} className="span-two">=</button>
       </div>
     </div>
  );
};

export default App;
