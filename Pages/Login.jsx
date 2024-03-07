import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"


function Login () {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [notif, setNotif] = useState("")
    

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

        axios.post('https://reqres.in/api/login', payload)
        .then((res) => {
            setNotif('Login Success')
        })
        .catch((err) => {
            setNotif(err.response.data.error)
        })
    }

    return (
        <div>
            <Navbar/>
            <h1>Login</h1>
            {!!notif.length && <h1>{notif}</h1>}
            
            <input type="text" placeholder="Username" onChange={handleUsernameChange} value={Username}/>
            <input type="password" placeholder="Password" onChange={handlePasswordChange} value={Password}/>
            <button onClick={handleLogin}>Login</button>
            <button>Register</button>
        </div>
    )}
export default Login