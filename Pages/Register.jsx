import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
function Register () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [notif, setNotif] = useState('')
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = () => {
        const payload = {
            email: email,
            password: password,
        }

        axios.post('https://reqres.in/api/register', payload)
            .then((res) => setNotif('Register Success'))
            .catch((err) => setNotif(err.res.data.error))
    }


    return (
        <div>
            <h1>Register</h1>
            {!!notif.length && <h1>{notif}</h1>}
            <input type="text" placeholder="Email" onChange={handleEmailChange}/>
            <input type="password" placeholder="Add Password" onChange={handlePasswordChange}/>
            <button onClick={handleRegister}>Register</button>
            <Link to={'/login'}>
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Register