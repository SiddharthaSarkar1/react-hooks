import React, { createContext, useState } from "react";
//useContext

export const LoginContext = createContext();

const LoginContexProvider = ({children}) => {

    const [userDetails, setUserDetails] = useState(true)

  return (
    <div>
        <LoginContext.Provider value={userDetails}>
            {children}
        </LoginContext.Provider>
    </div>
  )
}

export default LoginContexProvider