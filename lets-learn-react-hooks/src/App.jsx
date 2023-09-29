import { useState } from 'react';
import ClearuseEffect from './components/ClearuseEffect';
import HookEight from './components/HookEight';
import HookFive from './components/HookFive';
import HookFour from './components/HookFour';
import HookNine from './components/HookNine';
import HookOne from './components/HookOne';
import HookSeven from './components/HookSeven';
import HookSix from './components/HookSix';
import HookTen from './components/HookTen';
import HookThree from './components/HookThree';
import HookTwo from './components/HookTwo';
import UseCustomHook from './components/UseCustomHook';
import WindowWidth from './components/WindowWidth';
import MyApp from './learnAxios/MyApp';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      {/* <HookOne /> */}
      {/* <HookTwo /> */}
      {/* <HookThree /> */}
      {/* <WindowWidth /> */}
      {/* <ClearuseEffect /> */}
      {/* <HookFour /> */}
      {/* <HookFive /> */}
      {/* <HookSix /> */}
      {/* <HookSeven /> */}
      {/* <HookEight /> */}
      {/* <HookNine /> */}
      {/* <HookTen /> */}
      {/* <UseCustomHook /> */}

      {//AXIOS learning part}
      }

      {/* <MyApp /> */}

      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
