import React, { useState } from 'react'
//UseState Hook
const HookOne = () => {

    // const [counter, setCounter] = useState(0);
    // const [name, setName] = useState("");

    const [details, setDetails] = useState({counter: 0, name: ""});

    const handleClick = () => {
        // setCounter(counter + 1);
        setDetails((previousValues) => ({
            ...previousValues,
            counter: details.counter + 1
        }));
    }

    console.log(details);

  return (
    <div>
        <input type="text" onChange={e => e.target.value} />
        {/* <input type="text" onChange={e => setName(e.target.value)} /> */}
        <h1>{details.name} has clicked {details.counter} times!!!</h1>
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default HookOne