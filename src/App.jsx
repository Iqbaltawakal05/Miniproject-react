import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import User from "../Pages/User"
import SingleUser from "../Pages/SingleUser"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<SingleUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App