import React from 'react';
import Home from './components/Home/Home';
import { Route, Routes } from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';
import MyBike from './pages/my-bike/MyBike';
import SingleBike from './pages/SingleBike/SingleBike';
import Login from './components/Login';
import Became from './components/Became';
import Booknow from './pages/Booknow/Booknow';
import Forgot from './components/forgot/Forgot';
import Reset from './components/forgot/Reset';
import History from './components/History';

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
<Routes>
<Route path="/" element={<Home />} />
<Route
            path="/course"
            element={  <Courses />}
          />
                <Route path="/login"
            element={<Login/>} />
          <Route  path="/signup"
            element={ <Signup/>} />
        
         <Route path="/Contact" element={<Contact />} />
         <Route path="/About" element={<About />} />
        <Route path='/my-bikes' element={<MyBike />} />
        <Route path='/bike/:id' element={<SingleBike />} />
        <Route path='/became' element={<Became/>} />
        <Route path='/booknow/:id' element={<Booknow/>} />
        <Route path='/forgot' element={<Forgot/>} />
        <Route path='/reset' element={<Reset/>} />
        <Route path='/history' element={<History/>} />
        



</Routes>
</div>
    </>
  )
}

export default App
