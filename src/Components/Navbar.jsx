import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "../Css/Style.css"
function Navbar () {
    const Navigate = useNavigate();
    const token = localStorage.getItem('access_token')

    const logout = () => {
        localStorage.removeItem('access_token')
        Navigate('/login')
    }

    return (
        <div className="Navbar">
            <Link to={"/"}><a href="">Home</a></Link>
            <Link to={"/user"}>User</Link>
            {token ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <Link to={'/login'}>
                    <button>Login</button>
                </Link>
            )}
        </div>
    )
}

export default Navbar