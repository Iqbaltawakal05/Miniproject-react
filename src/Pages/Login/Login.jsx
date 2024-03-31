import { useState } from "react"

// ---- API ----
import { loginAPI } from "../../Utils/API"
// ---- React Router DOM ----
import { Link, useNavigate } from "react-router-dom"
// ---- Axios ----
import axios from "axios"
// ---- Css & Img ----
import "./Login.css"
import loginlogo from "../../Assets/login.svg"
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

        axios.post(loginAPI, payload)
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
        <div className="login-page">
            <svg id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}><stop stopColor="rgba(227, 176, 75, 1)" offset="0%" /><stop stopColor="rgba(227, 176, 75, 1)" offset="100%" /></linearGradient></defs>
                <path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="url(#sw-gradient-0)" d="M0,0L48,16.3C96,33,192,65,288,122.5C384,180,480,261,576,302.2C672,343,768,343,864,310.3C960,278,1056,212,1152,212.3C1248,212,1344,278,1440,269.5C1536,261,1632,180,1728,122.5C1824,65,1920,33,2016,81.7C2112,131,2208,261,2304,318.5C2400,376,2496,359,2592,351.2C2688,343,2784,343,2880,310.3C2976,278,3072,212,3168,171.5C3264,131,3360,114,3456,163.3C3552,212,3648,327,3744,375.7C3840,425,3936,408,4032,408.3C4128,408,4224,425,4320,416.5C4416,408,4512,376,4608,367.5C4704,359,4800,376,4896,383.8C4992,392,5088,392,5184,392C5280,392,5376,392,5472,400.2C5568,408,5664,425,5760,424.7C5856,425,5952,408,6048,383.8C6144,359,6240,327,6336,294C6432,261,6528,229,6624,204.2C6720,180,6816,163,6864,155.2L6912,147L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z" />
            </svg>
        <div className="login-body">
        <div className="login-container">
            <img src={loginlogo} alt="login icon"/>
        <div className="login-form">
            <h1>Sign in</h1>
            {!!notif.length && <h5>{notif}</h5>}
            <input type="text" placeholder="eve.holt@reqres.in" onChange={handleUsernameChange} value={Username}/>
            <input type="password" placeholder="Pistol" onChange={handlePasswordChange} value={Password}/>
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
        </div>

    )}
export default Login