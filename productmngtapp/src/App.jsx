import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Addproduct from './components/Addproduct'
import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <h1>PRODUCT MANAGEMENT APPLICATION</h1>
      <Routes>
        <Route path="/h" element={<Home/>}></Route>
        <Route path="/a" element={<Addproduct />}></Route>
        </Routes>
    </>
  )
}

export default App
