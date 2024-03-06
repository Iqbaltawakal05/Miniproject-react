import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

function User () {
    const [User, setUser] = useState({})

    const getUserdata = () => {
        axios.get('https://reqres.in/api/users?page=2')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getUserdata()
    }, [])
    
    return (
        <div>
            <Navbar />
            <h1>User</h1>
        </div>
    )
}

export default User