
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import loginlogo from "../../img/login.svg"
import "./Login.css"
function Login () {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [notif, setNotif] = useState("")
    const [loading, setLoading] = useState(false)

    const Navigate = useNavigate()
    

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        const payload = {
            username: Username,
            password: Password,
        }

        setLoading(true)

        axios.post('https://reqres.in/api/login', payload)
        .then((res) => {
            setNotif('Login Success')
            setLoading(false)
            const token = res.data.token
            localStorage.setItem('access_token', token)
            setTimeout(() => {
                Navigate('/');
            }, 2000)
        })
        .catch((err) => {
            setNotif(err.response.data.error)
            setLoading(false)

        })
    }

    return (
        <div className="login-body">
        <div className="login-container">
            <img src={loginlogo} alt="login icon"/>
        <div className="login-form">
            <h1>Sign in</h1>
            {!!notif.length && <h1>{notif}</h1>}
            <input type="text" placeholder="Username/Email" onChange={handleUsernameChange} value={Username}/>
            <input type="password" placeholder="Password" onChange={handlePasswordChange} value={Password}/>
            <button disabled={loading} onClick={handleLogin}>{loading ? "Loading..." : "Sign in"}</button>
            <div className="link-register">
            <p>Don't have an account?</p>
            <Link to={'/register'}>
                <a href="">Sign up</a>
            </Link>
            </div>
        </div>
        </div>
        </div>

    )}
export default Login