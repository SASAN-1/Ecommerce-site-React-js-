import React from 'react'
import Navbar from './pages/Navbar'
import PageNotFound from './pages/PageNotFound'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/user/Cart'
import About from './pages/About'
import Contact from './Contact'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
        <Routes>
            <Route element={<><Navbar/><Footer/></>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Route>
            <Route path="/Login" element={<Login/>}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </>
  )
}

export default App