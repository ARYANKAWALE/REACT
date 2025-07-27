import './App.css'

function App() {

  function handleClick(){
    alert("I am Clicked");
  }

  function handleMouseOver(){
    alert("Para KE upar mouse leke aaye");
  }
  function handleInputChange(e){
    // console.log("input me value change hui hai")
    console.log("value till now:",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    // i am writting my custom behaviour down
    alert("Are you sure?")
  }

  return (
    <div>

      <button onClick={()=>alert("immidiate invoke")}>
    Click
      </button>

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form> */}

    {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black", padding:"10px"}}>I am a Paragraph</p>

      <button onClick={handleClick}>
        Click me
      </button> */}
    </div>
  )
}

export default App
