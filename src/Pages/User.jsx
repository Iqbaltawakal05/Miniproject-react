import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Layout from "../Components/Layout"
import "../Css/User.css"

function User () {
    const [User, setUser] = useState([])
    const [pagination, setPagination] = useState({
    perPage: 0,
    total: 0,
    currentPage: 1,
    totalPages: 0,
    previousPage: 0,
    nextPage: 0,
  });

    const getUserdata = () => {
        axios.get(`https://reqres.in/api/users?page=${pagination.currentPage}`)
        .then((res) => {
        setUser(res.data.data);
        setPagination({
          ...pagination,
          page: res.data.page,
          perPage: res.per_Page,
          total: res.data.total,
          totalPages: res.data.totalPages,    
        });
      })
      .catch((err) => console.log(err));
  };


  const handleBack = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage - 1,
    });
  };

  const handleNext = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    });
  };


    useEffect(() => {
        getUserdata()
    }, [])

    useEffect(() => {
        getUserdata()
    }, [pagination.currentPage])

    return (
        <Layout>
            <h1 className="user-title">User</h1>
            <div className="user-body">
            {User.map((item) => (
                    <div className="user">
                        <img src={item.avatar} alt=""/>
                        <h1>{item.first_name}</h1>
                        <p>{item.email}</p>
                        <Link to={`/user/${item.id}`}>
                            <button>Detail</button>
                        </Link>
                    </div>
                ))
            }
            </div>
            <div className="pagination">
                <button disabled={pagination.currentPage === 1} onClick={handleBack}>
                back
                </button>
                <button disabled={!pagination.currentPage === pagination.totalPages} onClick={handleNext}>
                next
                </button>
            </div>
        </Layout>
    )
}

export default User