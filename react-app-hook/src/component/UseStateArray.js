import React, { useState } from 'react'

const UseStateArray = () => {
    const bioData = [
        {
            id: 0, name: 'Vinod', age: 28
        },
        {
            id: 1, name: 'Tutai', age: 26
        },
        {
            id: 2, name: 'Prateek', age: 27
        }
    ]

    const [myArray, setmyArray] = useState(bioData);

    const clearArray = () => {
        setmyArray([]);
    }

    const removeElem = (id) => {
        const myNewArray = myArray.filter((curElem) => {
            return curElem.id != id;
        })
        setmyArray(myNewArray);
    }

    return (
        <>
            <p>----------------Array using useState(video-4) | react challange-2 TODO List(video-6)------------------</p>
            {/* <h1>Name : vinod & Age : 26</h1> */}
            {
                myArray.map((curelem) => {
                return(
                     <h1 key={curelem.id}>Name : {curelem.name} & Age : {curelem.age}
                     <button onClick={() => removeElem(curelem.id)}>  Remove  </button>
                     </h1> 
                );
                })
            }
            <button onClick={clearArray}>Clear Data</button>
        </>
    )
}

export default UseStateArray
