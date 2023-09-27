import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setmyObject] = useState({
        myName: "Tutai Sarkar",
        myAge: 26,
        degree: 'MCA'
    })

    const changeObject = () => {
        setmyObject({...myObject, myName: "Siddhartha Sarkar"});
    }

    return (
        <div>
            <p>  -------------  useState with Object (Video-5)  -----------</p>
            <h1>Name : {myObject.myName} & Age : {myObject.myAge} & Degree : {myObject.degree}</h1>

            <button onClick={changeObject}>Updata Data</button>
        </div>
    )
}

export default UseStateObject
