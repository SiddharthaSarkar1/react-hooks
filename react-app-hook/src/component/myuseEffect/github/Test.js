import React, { useEffect, useState } from 'react'
import useTitleCount from '../useTitleCount';

const Test = () => {
    const [count, setCount] = useState(0);

   //Custom Hook
   useTitleCount(count);
   

    useEffect(() => {
        console.log("I am Fine.");
    }, [])

    return (
        <div>
            <p>-------------- Create your custom hook in react(Video-22) ---------------</p>
            <h1>{count}</h1>
            <button onClick={ () => setCount(count + 1) }> Click 😉 </button>
        </div>
    )
}

export default Test

