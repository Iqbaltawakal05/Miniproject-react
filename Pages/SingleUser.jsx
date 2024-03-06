
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function SingleUser () {
    const [singleUser, setSingleUser] = useState({});

    const { id } = useParams();
    
    const getSingleUser = () => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((res) => setSingleUser(res.data.data))
        .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        getSingleUser()
    }, [])
    
    return (
        <div>
            <p>single user</p>
            {
                singleUser &&
                <div>
                    <h1>{singleUser.first_name}</h1>
                    <p>{singleUser.email}</p>
                    <img src={singleUser.avatar} alt=""/>
                </div>
            }
        </div>
    )
}

export default SingleUser