import { Route, Routes } from "react-router-dom"
import Products from "./components/Products"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

const App = () => {
  return (
    <div>
      <nav>
        <a href="/signup">Signup</a> <br />
        <a href="/login">Login</a> <br />
        <a href="/products">Products</a>
      </nav>

      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>

      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Products/> */}
    </div>
  )
}

export default App
