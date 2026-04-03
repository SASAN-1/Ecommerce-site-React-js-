import React from 'react'
import Navbar from './pages/Navbar'
import PageNotFound from './pages/PageNotFound'
import { Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/shop/Shop'
import Footer from './pages/Footer'
import ProductDetails from './pages/ProductDetails'
import Bikes from './pages/shop/Bikes'
import Parts from './pages/shop/Parts'
import Gears from './pages/shop/Gears'

const App = () => {
  return (
    <>
        <Routes>
            <Route element={<><Navbar/><Footer/></>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}>
                    <Route index element={<Navigate to="bikes" replace />} />
                    <Route path="bikes" element={<Bikes/>}/>
                    <Route path="parts" element={<Parts/>}/>
                    <Route path="gears" element={<Gears/>}/>
                </Route>
                <Route path="/productDetails/:slug" element={<ProductDetails/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </>
  )
}

export default App