import React, { useState } from 'react'

const ShortCurEval = () => {
    const [demo, setdemo] = useState("SDE")
    return (
        <div>
            <p> --------------- Short Circuit Evaluation in React (Video-8)---------------</p>
            <h1>{ demo || "Tutai" }</h1>
            <h1>{ demo && "Siddhartha" }</h1>
        </div>
    )
}

export default ShortCurEval
