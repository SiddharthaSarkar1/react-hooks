import React, { useCallback, useState } from 'react';
import PrintTable from './PrintTable';
//useCallback Hook
const HookTen = () => {

    const [number, setNumber] = useState(1);
    const [darkTheme, setDarkTheme] = useState(false);

    const calculateTable = useCallback(
      () => {
        return [number * 1, number * 2, number * 3, number * 4, number * 5];
      },
      [number],
    )
    

    const cssStyle = {
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
    }

  return (

    <div style={cssStyle}>
        <input type="number" onChange={(e) => setNumber(e.target.valueAsNumber)} value={number} />
        <PrintTable calculateTable={calculateTable} />
        <button onClick={() => setDarkTheme(!darkTheme)}>Toggle</button>
    </div>

  )
}

export default HookTen