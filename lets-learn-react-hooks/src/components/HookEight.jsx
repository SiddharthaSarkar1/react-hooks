import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const HookEight = () => {

    const [toggle, setToggle] = useState(false);
    const textRef = useRef();

    useEffect(() => { 
      console.log("useEffect");
    }, [toggle])

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        if(textRef.current != null){
            const dimension = textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop = `${dimension.height}px`
        }
    }, [toggle])
    

  return (
    <>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <h4 ref={textRef}>Code Bless you</h4>}
    </>
  )
}

export default HookEight