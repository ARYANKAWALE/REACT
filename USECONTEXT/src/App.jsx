import { createContext, useState } from 'react';
import './App.css'
import ChildA from './component/ChildA'

//step 1: create context
// step2:wrap all the child inside a provider
// step3:provide the value to the context
const UserContext = createContext();
const ThemeContext=createContext();
function App() {
  const[user,setUser]=useState({name:"aryan"})
  const[theme,setTheme]=useState("light")
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
        <ChildA/>
      </div>
      
    </ThemeContext.Provider>
    </UserContext.Provider>
    



  //   <> 
  //   <UserContext.Provider value={user}>
  //     <ChildA />
  //   </UserContext.Provider>
  //  </>
  )
}

export default App
export {UserContext}
export {ThemeContext}