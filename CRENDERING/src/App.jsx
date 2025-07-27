import './App.css'
import { useState } from 'react'
import { LoginButton } from './components/LoginButton'
import { LogOutButton } from './components/LogOutButton'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)

  if(!isLoggedIn){
    return(
      <LoginButton setLoggedIn={setLoggedIn} />
    )
  }

  return(
    <div>
      <h1>Welcome EveryOne to my Web dev Course</h1>
      <div>
         {isLoggedIn && <LogOutButton setLoggedIn={setLoggedIn}/>}
      </div>
     
    </div>
  )

  // return(
  //   <div>
  //     {isLoggedIn ? <LogOutButton/> : <LoginButton/>}
  //   </div>
  // )

  // if(isLoggedIn){
  //   return(
  //       <LogOutButton setLoggedIn={setLoggedIn} />
  //   )
  // }else{
  //   return(
  //       <LoginButton setLoggedIn={setLoggedIn} />
  //   )
  // }
}

export default App
