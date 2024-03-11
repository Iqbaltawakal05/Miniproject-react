import Home from "../Pages/Home"
import User from "../Pages/User"
import SingleUser from "../Pages/SingleUser"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
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