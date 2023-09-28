import React, {useState} from 'react'

const RuleHooks = () => {
    const [myName, setMyName] = useState("SDE Tutai Sarkar.")
    return (
        <div>
            <h1>{myName}</h1>
        </div>
    )
}

export default RuleHooks

