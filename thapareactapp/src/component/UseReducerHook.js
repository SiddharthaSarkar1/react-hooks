import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    if(action.type === "INCRMENT"){
        return state + 1;
    }
    if(action.type === "DECRMENT"){
        if(state >= 1){
            return state - 1;
        }else{
            return state;
        }
    }
    
}

const UseReducerHook = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>---------- React useReducer hook (video-20) ----------</p>
            <h1>{state}</h1>
            <div>
                <button onClick={ () => dispatch({type: "INCRMENT"}) }>Ind</button>
                <button onClick={ () => dispatch({type: "DECRMENT"}) }>Dec</button>
            </div>
        </div>
    )
}

export default UseReducerHook
