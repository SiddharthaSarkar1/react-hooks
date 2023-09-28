import React, {useRef, useState} from 'react'

const UnControlled = () => {

    //it is like useState only and it preserve the value. NO rerender.
    const luckyName = useRef(null);
    const [show, setshow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const lname = luckyName.current.value;
        lname == "" ? alert("Please fill the data!!!") : setshow(true);
    }

    return (
        <div>
            <p>----------- React uncontrolled form [Ref & useRef Hooks](Video-18) ------------</p>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyName">Enter your lucky name : </label>
                    <input type="text" id="luckyName" ref={ luckyName } />
                </div>
                <br />
                <button>Submit</button>
            </form>
            <h2> { show ? `Your lucky name is ${luckyName.current.value}.` : "" } </h2>
        </div>
    )
}

export default UnControlled
