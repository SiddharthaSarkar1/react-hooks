import React, { useEffect, useState } from 'react'

const HookTwo = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(5);

    useEffect(() => {
      document.title = `${count} new message!`;
    }, [otherCount]);
    

  return (
    <div>
        <h3>{count} new message!</h3>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <h3>Other Count : {otherCount}</h3>
        <button onClick={() => setOtherCount(otherCount+5)}>Increase other count</button>
    </div>
  )
}

export default HookTwo