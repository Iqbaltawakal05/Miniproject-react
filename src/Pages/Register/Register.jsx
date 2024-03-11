import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./register.css"
import loginlogo from "../../img/login.svg"

function Register () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [notif, setNotif] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
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

        setLoading(true)

        axios.post('https://reqres.in/api/register', payload)
            .then((res) => { 
                setNotif('Register Success')
                setLoading(false)
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            })
            .catch((err) => setNotif(err.res.data.error))
    }


    return (
        <div className="register-body">
        <div className="register-container">
            <img src={loginlogo} alt="login icon"/>
        <div className="register-form">
            <h1>Sign up</h1>
            {!!notif.length && <h1>{notif}</h1>}
            <input type="text" placeholder="Enter Email" onChange={handleEmailChange}/>
            <input type="password" placeholder="Enter Password" onChange={handlePasswordChange}/>
            <button disabled={loading} onClick={handleRegister}>{loading ? "Loading..." : "Sign Up"}</button>
            <div className="link-register">
                <p>Already have an account?</p>
            <Link to={'/login'}>
                <a href="">Sign in</a>
            </Link>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Register