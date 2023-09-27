import React, {useState, useRef, useEffect} from 'react'

const HookFive = () => {

    const [name, setName] = useState("");
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //   setCount((prev) => prev + 1);
    // })

    const count = useRef(0)
    
    console.log(count);
    useEffect(() => {
        count.current = count.current + 1;
      })

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name : {name}</h2>
      <h2>Count : {count.current}</h2>
    </div>
  )
}

export default HookFive
