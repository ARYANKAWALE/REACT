import './App.css'
import { useEffect, useState } from 'react'
// import LoggerComponent from './components/LoggerComponent'
// import TimerComponent from './components/TimerComponent';
// import DataFetcher from './components/DataFetcher';
import ResizeComponent from './components/ResizeComponent';
import MultiEffectComponent from './components/MultiEffectComponent';

function App() {
  // const [count,setCount] = useState(0);
  // const[total,setTotal] = useState(1);
  // first -> side-effect function
  // second -> cleanup function
  // third -> comma separated dependency array


  // 1. variation FIRST

  // useEffect(()=>{
  //   alert("i will run on each render");
  // })
  
  // 2. variation SECOND

  // useEffect(()=>{
  //   alert("i will run 1st render");
  // },[])

  // 3. variation THIRD
  // useEffect(()=>{
  //   alert("i will run every time when count is updated");
  // },[count])

  // 4. variation FOURTH-> multiple dependencies
// useEffect(()=>{
//   alert("i will run every time when count or total is updated");
// },[count,total])

// 5. variation FIFTH-> cleanup function
// useEffect(()=>{
//   alert("Count is updated");
//   return ()=>{
//     alert(" unmounted from UI");
//   }
// },[count])





  function handleClick(){
    setCount(count+1);
    // setTotal(total+1);
  }

  function handleClickTotal(){
    setTotal(total+1);
  }

  return (
    <div>
      {/* <LoggerComponent /> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      <MultiEffectComponent/>

      {/* <button onClick={handleClick}>Update Count</button>
      <br />
      Count is: {count}
      <br />
      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      Total is: {total} */}
    </div>
  )
}

export default App
