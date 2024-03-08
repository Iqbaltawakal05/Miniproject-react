import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Layout from "../Components/Layout"
import "../Css/User.css"

function User () {
    const [User, setUser] = useState([])

    const getUserdata = () => {
        axios.get('https://reqres.in/api/users/')
        .then((res) => setUser(res.data.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getUserdata()
    }, [])

    return (
        <Layout>
            <h1 className="user-title">User</h1>
            <div className="user-body">
            {User.map((item) => (
                    <div className="user">
                        <h1>{item.first_name}</h1>
                        <img src={item.avatar} alt=""/>
                        <p>{item.email}</p>
                        <Link to={`/user/${item.id}`}>
                            <button>Detail</button>
                        </Link>
                    </div>
                ))
            }
            </div>
        </Layout>
    )
}

export default User