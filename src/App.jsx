import React from 'react';
import '../src/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectHome from './components/projects/ProjectHome';

function App() {
  return (
    <>
      <div className='bg-bodyColor h-full w-full normal-point'>
        {/* Background grid div */}
        <div>
          <div className='fixed w-full h-full top-0 left-0 z-0'>
            <div className='h-full w-full max-w-[90vw] m-auto flex justify-between'>
              <div className='h-full w-[1px] bg-[#D6D5D2] lg:block hidden'></div>
              <div className='h-full w-[1px] bg-[#D6D5D2] lg:block hidden'></div>
              <div className='h-full w-[1px] bg-[#D6D5D2]'></div>
              <div className='h-full w-[1px] bg-[#D6D5D2]'></div>
              <div className='h-full w-[1px] bg-[#D6D5D2]'></div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className='relative z-10 w-full max-w-[90vw] m-auto'>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='projects' element={<ProjectHome />} />
              {/* Add more routes here */}
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
