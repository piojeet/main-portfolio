import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicesHome from './ServicesHome';

function ServicesMainRoute() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/services' element={<ServicesHome />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default ServicesMainRoute