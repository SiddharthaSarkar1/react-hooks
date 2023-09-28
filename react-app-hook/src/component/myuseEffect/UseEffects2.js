//This is react useEffect CleanUp Function
import React, { useEffect, useState } from 'react'

const UseEffects2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        setWidthCount(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", actualWidth);
        return() => {
            window.removeEventListener("resize", actualWidth);
        }
    });

    return (
        <div>
            <p>------------ This is react useEffect CleanUp Function (video-15) ------------</p>
            <h4> -- The actual size of the window is : -- </h4>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffects2
