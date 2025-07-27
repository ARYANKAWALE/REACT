import { useState } from 'react'
import './App.css'
import { decrement, increment,reset,incrementByAmount} from './features/counter/counterSlice'
import { useDispatch , useSelector } from 'react-redux'
function App() {

  const [amount,setAmount] = useState(0);
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
   
  function handleIncrementClick (){
    dispatch(increment())
  }

  function handleDecrementClick (){
    dispatch(decrement())
  }

  function handleResetClick(){
    dispatch(reset())
  }
  function handleIncrementAmount(){
    dispatch(incrementByAmount(amount))
  }


  return (
    <div className='container'>
    <button onClick={handleIncrementClick}>+</button>
    <p>count:{count}</p>
    <button onClick={handleDecrementClick}>-</button>
<br />
<br />

    <button onClick={handleResetClick}> reset</button>
<br />
      <input type='number' value={amount} placeholder='Enter amount' onChange={(e)=>setAmount(e.target.value)}/>
<br />
<br />
      <button onClick={handleIncrementAmount}>increment by Amount</button>
    </div>
  )
}

export default App
