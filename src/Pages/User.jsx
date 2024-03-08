import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Layout from "../Components/Layout"

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
            <h1>User</h1>
            {User.map((item) => (
                    <div>
                        <h1>{item.first_name}</h1>
                        <p>{item.email}</p>
                        <img src={item.avatar} alt=""/>
                        <Link to={`/user/${item.id}`}>
                            <button>Detail</button>
                        </Link>
                    </div>
                ))
            }
        </Layout>
    )
}

export default User