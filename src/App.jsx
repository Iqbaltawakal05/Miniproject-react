import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import User from "../Pages/User"
import SingleUser from "../Pages/SingleUser"
import Login from "../Pages/Login"

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<SingleUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App