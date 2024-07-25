import React from 'react'
import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Signup' element={< Signup />} />
        <Route path='/Signin' element={< Signin />} />

        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App