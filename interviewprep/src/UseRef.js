import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function UseRef() {
  const [name, setName] = useState('')
  const [counter, setCounter] = useState(0)
  const inputEl = useRef('')
  const PreviousCounterRef = useRef(0)

  useEffect(() => {
    PreviousCounterRef.current = counter
  }, [counter])
  const resetForm = () => {
    setName('')
    inputEl.current.focus();
    inputEl.current.value = "chandu"
    inputEl.current.style.color = 'red';
  }
  return (
    <div className="App">
      <div>
        <input
          ref={inputEl}
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetForm}>Reset</button>
      </div>
      <h1>Random Counter : {counter}</h1>
      {typeof PreviousCounterRef.current !== 'undefined' && (
        <h2>Previous counter : {PreviousCounterRef.current}</h2>
      )}
      <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>Generate Number</button>
    </div>
  );
}

export default UseRef;
