import { useState,useCallback } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {

  // const [count, setCount] = useState(0);

  // const handleClick=useCallback(()=>{
  //   setCount(count+1)
  // },[count]);


  return (
    <div>
      <ExpensiveComponent/>
    </div>
    // <>
    //   <p>Count {count}</p>
    //   <button onClick={handleClick}>CLick</button>
    //   <br />

    //   <ChildComponent buttonName="Click me" handleClick={handleClick}/>
    // </>
  )
}

export default App
