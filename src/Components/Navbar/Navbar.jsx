import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar () {
    const Navigate = useNavigate();
    const token = localStorage.getItem('access_token')

    const logout = () => {
        localStorage.removeItem('access_token')
        Navigate('/login')
    }

    return (
        <div className="navbar-container">
            <div className="logo">
                <Link to={"/"}><a href="">Userly</a></Link>
            </div>
            <div className="nav">
            <Link to={"/user"}><a href="">User</a></Link>
            <Link to={"/imgFollow"}><a href="">image</a></Link>
            </div>
            <div className="nav-button"> 
            {token ? (
                <button onClick={logout}><i class="bi bi-box-arrow-left"></i> Logout</button>
            ) : (
                <Link to={'/login'}>
                    <button>Login</button>
                </Link>
            )}
            </div>
        </div>
    )
}

export default Navbar