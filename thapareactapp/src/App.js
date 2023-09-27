import React, { useState } from 'react'
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BasicForm from './component/forms/BasicForm';
import UnControlled from './component/forms/UnControlled';
import Test from './component/myuseEffect/github/Test';
import MyUseEffects1 from './component/myuseEffect/MyUseEffects1';
import UseEffectApi from './component/myuseEffect/UseEffectApi';
import UseEffects2 from './component/myuseEffect/UseEffects2';
import RuleHooks from './component/RuleHooks';
import ShortCurEval from './component/ShortCurEval';
import CompA from './component/useContext/CompA';
import UseReducerHook from './component/UseReducerHook';
import UseStateArray from './component/UseStateArray';
import UseStateObject from './component/UseStateObject';


const App = () => {

  const [myName, setMyName] = useState("Tutai Sarkar");

  const changeName = () => {
    let val = myName;
    if(val === "Tutai Sarkar"){
      setMyName("Siddhartha Sarkar");
    }else{
      setMyName("Tutai Sarkar");
    }
    
  }

  console.log(myName);

  return (
    <div>
      <h1>{ myName }</h1>
      <button className="btn" onClick={ changeName }>Click Me Please</button>
      <RuleHooks />
      <UseStateArray />
      <UseStateObject />
      <ShortCurEval />
      <BasicForm />
      <MyUseEffects1 />
      <UseEffects2 />
      <UnControlled />
      <UseReducerHook />
      <CompA />
      <Test />
      <UseEffectApi />
    </div>
  )
}

export default App
