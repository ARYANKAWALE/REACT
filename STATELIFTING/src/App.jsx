import './App.css'
import { useState } from 'react'
import Card from './components/Card'

function App() {
  // create state
  // manage state
  // change state
  // sabhi child me state sync karwadunga
  const [name, setName] = useState('')
  return (
    <div>
      <Card title="Card 1" name={name} setName={setName}/>
      <Card title="Card 2" name={name} setName={setName}/>
      <p>i am inside Parent Component and value of name is {name}</p>
    </div>
  )
}

export default App
