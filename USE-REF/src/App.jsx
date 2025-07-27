import { useState, useEffect, useRef } from 'react'

import './App.css'


function App() {

  // let btnref=useRef();

  // const [count, setCount] = useState(0)
  // let val=useRef(0);
  // function handleIncrement () {
  //   val.current=val.current+1;
  //   console.log(val.current);
  //   setCount(count + 1);
  // }

  // function ChangeColor(){
  //   btnref.current.style.backgroundColor="red";
  // }

  // useEffect(()=>{
  //   console.log("me firse rendr hua")
  // })

  
  const [time,setTime]=useState(0);
  let timerRef=useRef(null);
  function startTimer(){
    timerRef.current=setInterval(()=>{
      setTime(time =>time+1)
    },1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  
  return (

    <>
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <button onClick={stopTimer}>
        Stop
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>

    {/* <div>
      <button ref={btnref} onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={ChangeColor}>
        change color of 1st btn
      </button>
      
      <div>

        <p>Count: {count}</p>
      </div>
    </div> */}
    </>
  )
}

export default App
