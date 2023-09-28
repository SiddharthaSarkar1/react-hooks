import React, { useContext } from 'react'
import { BioData } from './CompA'

const CompC = () => {
    const myName = useContext(BioData)
    return (
        <>
            <h1>Hello from { myName }</h1>
        </>
    )
}

export default CompC
