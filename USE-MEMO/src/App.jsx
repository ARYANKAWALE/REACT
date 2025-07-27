import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("insideexpensiveTask");
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;

  }
  let doubleValue =  useMemo(()=> expensiveTask(input),[input]);

 

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click to Count</button>
      <p>Count: {count}</p>

      <input type="number"
        placeholder='Enter a number'
        onChange={(e) => setInput(e.target.value)} />

      <div>
        <p>Double Value: {doubleValue}</p>
      </div>
    </>
  )
}

export default App
