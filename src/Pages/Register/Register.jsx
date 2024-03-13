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
        <div className="register-page">
            <svg id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}><stop stopColor="rgba(227, 176, 75, 1)" offset="0%" /><stop stopColor="rgba(227, 176, 75, 1)" offset="100%" /></linearGradient></defs>
                <path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="url(#sw-gradient-0)" d="M0,0L48,16.3C96,33,192,65,288,122.5C384,180,480,261,576,302.2C672,343,768,343,864,310.3C960,278,1056,212,1152,212.3C1248,212,1344,278,1440,269.5C1536,261,1632,180,1728,122.5C1824,65,1920,33,2016,81.7C2112,131,2208,261,2304,318.5C2400,376,2496,359,2592,351.2C2688,343,2784,343,2880,310.3C2976,278,3072,212,3168,171.5C3264,131,3360,114,3456,163.3C3552,212,3648,327,3744,375.7C3840,425,3936,408,4032,408.3C4128,408,4224,425,4320,416.5C4416,408,4512,376,4608,367.5C4704,359,4800,376,4896,383.8C4992,392,5088,392,5184,392C5280,392,5376,392,5472,400.2C5568,408,5664,425,5760,424.7C5856,425,5952,408,6048,383.8C6144,359,6240,327,6336,294C6432,261,6528,229,6624,204.2C6720,180,6816,163,6864,155.2L6912,147L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z" />
            </svg>
        <div className="register-body">
        <div className="register-container">
            <img src={loginlogo} alt="login icon"/>
        <div className="register-form">
            <h1>Sign up</h1>
            {!!notif.length && <h5>{notif}</h5>}
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
        </div>
    )
}

export default Register