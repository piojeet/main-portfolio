import React, { useEffect, useRef } from 'react';
import '../src/index.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import ProjectHome from './components/projects/ProjectHome';
import { AuthProvider } from './context/AuthContext';
import { ProjectAllProvider } from './context/ProjectAllContext';
import WorkPersonationOchi from './components/WorkPersonation/WorkPersonationOchi';
import AboutHome from './components/about/AboutHome';
import ContactHome from './components/contact/ContactHome';
import ServicesHome from './components/services/ServicesHome';
import ServicesBrandingHome from './components/services/servicesbranding/ServicesBrandingHome';
import ServicesWebDesignHome from './components/services/serviceswebsitedesign/ServicesWebDesignHome';
import ServicesFrontEndHome from './components/services/Servicesfrontend/ServicesFrontEndHome';
import ServicesDesignSupportHome from './components/services/servicesdesignsupport/ServicesDesignSupportHome';

import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ConfettiCanvas from './components/ConfettiCanvas';
import DisableDevTools from './components/DisableDevTools';


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  return null;
}




function App() {

  const linetRef = useRef(null);
  useGSAP(() => {
    gsap.from(".lines", {
      height: "0%",
      duration: 5,
      ease: "power2.inOut",
    })
  })

  

  return (
    <>
      <div className='bg-bodyColor h-full w-full normal-point'>
        <div>
          <div className='fixed w-full h-full top-0 left-0 z-0'>
            <div ref={linetRef} className='h-full w-full max-w-[90vw] m-auto flex justify-between'>
              <div className='lines h-full w-[1px] bg-[#D6D5D2] lg:block hidden'></div>
              <div className='lines h-full w-[1px] bg-[#D6D5D2] lg:block hidden'></div>
              <div className='lines h-full w-[1px] bg-[#D6D5D2]'></div>
              <div className='lines h-full w-[1px] bg-[#D6D5D2]'></div>
              <div className='lines h-full w-[1px] bg-[#D6D5D2]'></div>
            </div>
          </div>
        </div>

        {/* Wrap Router at the top */}
        <Router>
          <ScrollToTop /> {/* This will scroll to top on route change */}
          <div className='relative z-10 w-full max-w-[90vw] m-auto'>
            <AuthProvider>
              <ProjectAllProvider>
                
                <DisableDevTools />
                <ConfettiCanvas />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='projects' element={<ProjectHome />} />
                  <Route path='work-personation' element={<WorkPersonationOchi />} />
                  <Route path='about' element={<AboutHome />} />
                  <Route path='services' element={<ServicesHome />} />
                  <Route path='branding' element={<ServicesBrandingHome />} />
                  <Route path='website-design' element={<ServicesWebDesignHome />} />
                  <Route path='frontend-design' element={<ServicesFrontEndHome />} />
                  <Route path='design-support' element={<ServicesDesignSupportHome />} />
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
