import React, { useState } from 'react'

const BasicForm = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        if(email && password){
        const newEntry = {id: new Date().getTime().toString(), email, password};

        setAllEntry([...allEntry, newEntry]);
        setemail("");
        setpassword("");
        }else{
            alert("Please fill the Email and Password!!!!");
        }
    }

    return (
        <>
            <p>-----------Login form with React (video-9)|(video-10)------------</p>
            <form action="" onSubmit={submitForm}>

                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={ (e) => setemail(e.target.value) } />
                </div>

                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="text" name="password" id="password" autoComplete="off" value={password} onChange={ (e) => setpassword(e.target.value) } />
                </div>

                <button type="submit">Login</button>

            </form>

            <div>
                {
                    allEntry.map( (curelem) => {
                        const {id, email, password} = curelem;
                        return (
                            <div key={id}>
                                <p>{email}</p>
                                <p>{password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BasicForm
