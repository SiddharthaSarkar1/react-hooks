import React, {useState, useEffect} from 'react'

const ClearuseEffect = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {

        console.log('Run Effect', counter);
        
        //This return is clean up code
        return () => {
            console.log('Clean up', counter);
        }
        
    }, [counter])
    
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  )
}

export default ClearuseEffect