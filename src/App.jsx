import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"

import "./styles.css"

function App() {

  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  return (

    <div>

      <Navbar cartCount={cart.length} />

      <Routes>

        <Route
          path="/"
          element={<Home onAddToCart={handleAddToCart} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

      <Footer />

    </div>

  )
}

export default App