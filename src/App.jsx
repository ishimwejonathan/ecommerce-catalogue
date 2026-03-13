import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import "./styles.css"

function App() {

  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <div>

      <Navbar cartCount={cartCount} />

      <Home onAddToCart={handleAddToCart} />

      <Footer />

    </div>
  )
}

export default App