import React, { useEffect, useState } from 'react'

const MyUseEffects1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count >= 1){
            document.title = `Chats(${count})`;
        }else{
            document.title = `Chats`;
        }
    }, [count])

    useEffect(() => {
        console.log("I am Fine.");
    }, [])

    return (
        <div>
            <p>-------------- useEffect hook in react ---------------</p>
            <h1>{count}</h1>
            <button onClick={ () => setCount(count + 1) }> Click 😉 </button>
        </div>
    )
}

export default MyUseEffects1

