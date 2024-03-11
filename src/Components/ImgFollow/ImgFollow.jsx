import axios from "axios"
import { useEffect, useState } from "react"
import "./Imgfollow.css"

const ImgFollow = () => {
    const [Following, setFollowing] = useState([])

    const getFollowing = () => {
        axios.get('https://reqres.in/api/users?page=2')
        .then((res) => setFollowing(res.data.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getFollowing()
    }, [])

    return (
        <div className="imgFollow">
            {
                Following.map((item) => (
                    <img key={item.id} src={item.avatar} alt=""/>     
                    ))
            }
        </div>
    )
}

export default ImgFollow