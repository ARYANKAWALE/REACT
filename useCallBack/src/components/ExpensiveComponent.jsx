import React, { useState, useCallback,useRef,useEffect } from 'react'

const ExpensiveComponent = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const previousFunction = useRef(null);
    const expensiveecalculation = useCallback(() => {
        console.log("Running expensive calculation");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        return result;
    }, [count]);
    useEffect(() => {
        if (previousFunction.current) {
            if (previousFunction.current === expensiveecalculation) {
                console.log('function not recreated');
            } else {
                console.log("Function recreated");
            }
        }
        previousFunction.current = expensiveecalculation;
    }, [expensiveecalculation])

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                placeholder='Type something' />
            <p>Expensive Calculation Result: {expensiveecalculation()}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    )
}

export default ExpensiveComponent