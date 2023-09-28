import React, { useMemo, useState } from 'react'

const HookNine = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const memoCalculation = useMemo(() => {
        return expensiveFunction(number);
    }, [number])

    const calculation = expensiveFunction(number);
    const cssStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    }

  return (
    <div style={cssStyle}>
        <input type="number" onChange={(e) => setNumber(e.target.valueAsNumber)} value={number} />
        <h2>Calculation: {memoCalculation}</h2>
        <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  )
}

function expensiveFunction(num) {
    console.log("Loop Started...");
    for(let i = 0; i < 1000000000; i++) {}
    return num;
}

export default HookNine