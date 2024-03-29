import { useEffect, useState } from "react"

// ---- API ----
import { singleUserAPI } from "../../Utils/API"
// ---- React Router DOM ----
import { Link, useParams } from "react-router-dom"
// ---- Axios ----
import axios from "axios"
// ---- Css & Img ----
import "./SingleUser.css"
import ImgFollow from "../../Components/ImgFollow/ImgFollow"
import headeruser from "../../Assets/headerUser.jpg"
// ---- Components ----
import Layout from "../../Components/Layout"

function SingleUser () {
    const [singleUser, setSingleUser] = useState({});

    const { id } = useParams();
    
    const getSingleUser = () => {
        axios.get(singleUserAPI(id))
        .then((res) => setSingleUser(res.data.data))
        .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        getSingleUser()
    }, [])

    return (
        <Layout>
            {
                singleUser &&
                <div className="singleuser">
                    <img className="headeruser" src={headeruser} alt="headerUser" />
                    <div className="singleuser-container">
                    <img className="avatar" src={singleUser.avatar} alt=""/>
                    <div className="singleuser-body">
                    <h1>{singleUser.first_name} {singleUser.last_name}</h1>
                    <p>{singleUser.email}</p>
                    <button>Edit Profile</button>
                    <Link to={`/`}>
                        <button>Back</button>
                    </Link>
                    <div className="about">
                    <h3>About</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iusto aperiam, quo dolorem nulla eveniet vitae et dolores dicta molestias perspiciatis voluptatum cum quos, repellat sapiente iure velit nisi corrupti.</h5>
                    <h3>Following</h3>
                    <div className="follow">
                    <ImgFollow/>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            }
        </Layout>
    )
}

export default SingleUser