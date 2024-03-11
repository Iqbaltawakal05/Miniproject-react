import Home from "../Pages/Home/Home"
import User from "../Pages/User/User"
import SingleUser from "../Pages/Singleuser/SingleUser"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import ImgFollow from "../Components/ImgFollow/ImgFollow"
import ProtectedRoute from "./protectedRoute"

export const routeList = [
    {
        path: "/",  
        element:
            <Home />
    },
    {
        path: "/user",
        element:
        <ProtectedRoute>
            <User />
        </ProtectedRoute>
    },
    {
        path: "/imgFollow",
        element: <ImgFollow />,
    },
    {
        path: "/user/:id",
        element:
        <ProtectedRoute>
            <SingleUser />
        </ProtectedRoute>
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]