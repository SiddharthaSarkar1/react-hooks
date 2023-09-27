import React, {useContext} from 'react';
import { LoginContext } from '../context/LoginContexProvider';

const ChildTwo = () => {
    
    const login = useContext(LoginContext);
    console.log(login);

  return (
    <div>
         <h1>ChildTwo</h1>
    </div>
  )
} 

export default ChildTwo