import './App.css'
import { useState } from 'react'
import Card from './components/Card'
import Button from './button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return (
    <div>
      <Button handleClick={handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>
{/* 
      <Card name="Aryan kawale">
        <h1>Best Web Dev course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course in soon</p>
      </Card>
      <Card children="Main ek children hu">
         Hello jee kaise ho
      </Card> */}
    </div>
    
  )
}

export default App
