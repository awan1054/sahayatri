import React from 'react';
import Home from './components/Home/Home';
import { Route, Routes } from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';


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
          <Route  path="/signup"
            element={ <Signup/>} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/About" element={<About />} />
</Routes>
</div>
    </>
  )
}

export default App
