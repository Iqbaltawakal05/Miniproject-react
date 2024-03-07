import { Link } from "react-router-dom"
function Register () {
    return (
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Register</button>
            <Link to={'/login'}>
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Register