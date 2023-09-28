import React, { createContext } from 'react'
import CompB from './CompB'

const BioData = createContext();

const CompA = () => {
    return (
        <BioData.Provider value={"Siddhartha Sarkar"} >
            <CompB />
        </BioData.Provider>
    )
}

export default CompA
export { BioData }
