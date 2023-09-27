import React, { useRef } from 'react'

const HookSix = () => {

    const inputEle = useRef();

    const handleClick = () => {
        console.log(inputEle.current);
        inputEle.current.style.width = "300px";
        inputEle.current.focus();
    }

  return (
    <div>
      <input type="text" ref={inputEle} /><br />
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default HookSix
