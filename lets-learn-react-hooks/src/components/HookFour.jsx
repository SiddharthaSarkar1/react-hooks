import React, { createContext } from "react";
//useContext
import ChildOne from "./ChildOne";
//Careated the context seperately
import LoginContexProvider from "../context/LoginContexProvider";

export const loginContext = createContext();

const HookFour = () => {
  return (
    <LoginContexProvider value={true}>
      <div>
        <ChildOne />
      </div>
    </LoginContexProvider>
  );
};

export default HookFour;
