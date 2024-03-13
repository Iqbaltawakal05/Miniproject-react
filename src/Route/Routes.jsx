import User from "../Pages/User/User"
import SingleUser from "../Pages/Singleuser/SingleUser"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import ProtectedRoute from "./protectedRoute"

export const routeList = [
    {
        path: "/",  
        element:
        <ProtectedRoute>
            <User />
        </ProtectedRoute>
    },
    {
        path: "/:id",
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