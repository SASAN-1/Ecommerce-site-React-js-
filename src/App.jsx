import React from "react";
import Navbar from "./pages/Navbar";
import PageNotFound from "./pages/components/PageNotFound";
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/components/Home";
import Cart from "./pages/components/Cart";
import About from "./pages/components/About";
import Contact from "./pages/components/Contact";
import Shop from "./pages/components/shop/Shop";
import Footer from "./pages/Footer";
import ProductDetails from "./pages/components/ProductDetails";
import Bikes from "./pages/components/shop/Bikes";
import Parts from "./pages/components/shop/Parts";
import Gears from "./pages/components/shop/Gears";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster position="top-right" duration={2000} />
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<Navigate to="bikes" replace />} />
            <Route path="bikes" element={<Bikes />} />
            <Route path="parts" element={<Parts />} />
            <Route path="gears" element={<Gears />} />
          </Route>
          <Route path="/productDetails/:slug" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
