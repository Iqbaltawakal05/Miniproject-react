import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


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
        <div>
            <Navbar/>
            <h1>Login</h1>
            {!!notif.length && <h1>{notif}</h1>}

            <input type="text" placeholder="Username" onChange={handleUsernameChange} value={Username}/>
            <input type="password" placeholder="Password" onChange={handlePasswordChange} value={Password}/>
            <button disabled={loading} onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>
            <Link to={'/register'}>
                <button>Register</button>
            </Link>
        </div>
    )}
export default Login