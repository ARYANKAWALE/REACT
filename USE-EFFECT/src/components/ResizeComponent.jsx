import React, {useState,useEffect} from 'react'

const ResizeComponent = () => {
    const[windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{

        const handleResize=()=> setWindowWidth(window.innerWidth);
        console.log("Event listener added");

        window.addEventListener('resize',handleResize);

        return()=>{
            console.log("Event listener removed");
            window.removeEventListener('resize',handleResize);
        }
    },[]);
  return (
    <div>
        <h1>window width is {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent