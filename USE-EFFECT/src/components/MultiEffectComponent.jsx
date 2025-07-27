import React, {useState,useEffect} from 'react'

function MultiEffectComponent(){
    const[count,setCount] = useState(0);
    const[seconds,setSeconds]= useState(0);

    useEffect(()=>{
        console.log('Count changed:',count);
    },[count]);

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            console.log("setInterval Started")
            setSeconds(prevSeconds=>prevSeconds+1);
        },1000);
        
        return()=>{
            console.log("setInterval Cleared");
            clearInterval(intervalId);

        }
    },[]);

    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <h2>Seconds: {seconds}</h2>
        </div>
    );
}

export default MultiEffectComponent