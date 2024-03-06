import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

function User () {
    const [User, setUser] = useState([])

    const getUserdata = () => {
        axios.get('https://reqres.in/api/users?page=2')
        .then((res) => setUser(res.data.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getUserdata()
    }, [])

    return (
        <div>
            <Navbar />
            <h1>User</h1>
            {User.map((item) => (
                    <div>
                        <h1>{item.first_name}</h1>
                        <p>{item.email}</p>
                        <img src={item.avatar} alt=""/>
                    </div>
                ))
            }
        </div>
    )
}

export default User