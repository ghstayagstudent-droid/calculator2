import './App.css'
import { useState } from 'react'

function CalcDisplay({ dispValue }) {
  return (
    <div className='CalcDisplay'>
      {dispValue}
    </div>
  )
}

function CalcButton({ label, buttonClassName='CalcButton', onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  )
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  // Handle number button clicks
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
  };

  // Handle operator button clicks
  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (num1 !== null) {
      setOp(value);
      setDisp(value);
    }
  };

  // Fixed Equal button click handler
  const eqClickHandler = (e) => {
    e.preventDefault();

    if (num1 !== null && num2 !== null && op !== null) {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      let result = 0;

      if (op === "+") {
        result = n1 + n2;
      } else if (op === "-") {
        result = n1 - n2;
      } else if (op === "*") {
        result = n1 * n2;
      } else if (op === "÷") {
        if (n2 === 0) {
          result = "Error";
        } else {
          result = n1 / n2;
        }
      }

      setDisp(result);
      setNum1(result.toString());
      setNum2(null);
      setOp(null);
    }
  };

  // Handle custom name button click
  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp("Gin Hanner Tayag");
  };

  // Handle clear button click
  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  };

  return (
    <div className='App'>
      <div className='CalcHeader'>
        Calculator of Gin Hanner Tayag - DA3A
      </div>

      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        
        <div className='CalcButtons'>
          <CalcButton label={'7'} onClick={numClickHandler} /> 
          <CalcButton label={'8'} onClick={numClickHandler} />
          <CalcButton label={'9'} onClick={numClickHandler} />
          <CalcButton label={'÷'} buttonClassName={'OperatorButton'} onClick={opClickHandler} />
          
          <CalcButton label={'4'} onClick={numClickHandler} />
          <CalcButton label={'5'} onClick={numClickHandler} />
          <CalcButton label={'6'} onClick={numClickHandler} />
          <CalcButton label={'*'} buttonClassName={'OperatorButton'} onClick={opClickHandler} />
          
          <CalcButton label={'1'} onClick={numClickHandler} />
          <CalcButton label={'2'} onClick={numClickHandler} />
          <CalcButton label={'3'} onClick={numClickHandler} />
          <CalcButton label={'-'} buttonClassName={'OperatorButton'} onClick={opClickHandler} />
          
          <CalcButton label={'C'} buttonClassName={'ClearButton'} onClick={clrClickHandler} />
          <CalcButton label={'0'} onClick={numClickHandler} />
          <CalcButton label={'='} buttonClassName={'OperatorButton'} onClick={eqClickHandler} />
          <CalcButton label={'+'} buttonClassName={'OperatorButton'} onClick={opClickHandler} />
          
          <CalcButton label={'Tayag'} onClick={nameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;