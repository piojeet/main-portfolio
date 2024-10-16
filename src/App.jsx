import React from 'react';
import '../src/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectHome from './components/projects/ProjectHome';
import { AuthProvider } from './context/AuthContext';
import { ProjectAllProvider } from './context/ProjectAllContext';
import WorkPersonationOchi from './components/WorkPersonation/WorkPersonationOchi';
import AboutHome from './components/about/AboutHome';
import ContactHome from './components/contact/ContactHome';

function App() {
  return (
    <>
      <div className='bg-bodyColor h-full w-full normal-point'>
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

        {/* Wrap Router at the top */}
        <Router>
          <div className='relative z-10 w-full max-w-[90vw] m-auto'>
            <AuthProvider>
              <ProjectAllProvider>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='projects' element={<ProjectHome />} />
                  <Route path='work-personation' element={<WorkPersonationOchi />} />
                  <Route path='about' element={<AboutHome />} />
                  <Route path='contact' element={<ContactHome />} />
                </Routes>
              </ProjectAllProvider>
            </AuthProvider>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
