import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./static/Header";
import './index.css'
import Home from "./pages/Home"
import Invest from "./pages/Invest"
import Stories from "./pages/Stories"
import Faqs from "./pages/Faqs"
import Resources from "./pages/Resourses"
import Save from "./pages/Save"
import Resourses from './pages/Resourses';
import Footer from "./static/Footer"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/save' element={<Save />}  />
        <Route path='/invest' element={<Invest />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/resources' element={<Resourses />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App


