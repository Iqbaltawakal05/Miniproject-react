import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import User from "../Pages/User"

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App