import { useEffect, useState } from "react"

// ---- API ----
import { imgFollowAPI } from "../../Utils/API";
// ---- Axios ----
import axios from "axios"
// ---- Css ----
import "./Imgfollow.css"

const ImgFollow = () => {
    const [Following, setFollowing] = useState([])

    const getFollowing = () => {
        axios.get(imgFollowAPI)
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