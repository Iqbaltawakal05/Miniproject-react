
import { Link } from "react-router-dom"
function Navbar () {
    return (
        <div>
            <Link to={"/"}><p>Home</p></Link>
            <Link to={"/user"}>User</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    )
}

export default Navbar