import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../../Components/Layout"
import "./User.css"
import Card from "../../Components/Card/Card"
import { userAPI } from "../../Utils/API"

function User () {
    const [User, setUser] = useState([])
    const [pagination, setPagination] = useState({
    per_Page: 6,
    total: 12,
    total_Pages: 2,
    page: 2,
    currentPage: 1,
  });
    const getUserdata = () => {
        axios.get(userAPI(pagination.currentPage))
        .then((res) => {
        setUser(res.data.data);
        setPagination({
          ...pagination,
          page: res.data.page,
          per_Page: res.per_Page,
          total: res.data.total,
          total_Pages: res.data.total_Pages,    
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
            <div className="user">
            <h1 className="user-title">User</h1>
            <div className="user-body">
            {User.map((props) => (
                    <Card key={props} item={props}/>
                ))
            }
            </div>
            <div className="pagination">
                <button disabled={pagination.currentPage === 1} onClick={handleBack}>
                back
                </button>
                <div className="pagination-button">
                <button disabled={pagination.currentPage === 1} onClick={() => setPagination({ ...pagination, currentPage: 1 })}>1</button>
                <button disabled={pagination.currentPage === 2} onClick={() => setPagination({ ...pagination, currentPage: 2 })}>2</button>
                </div>
                <button disabled={pagination.currentPage === 2} onClick={handleNext}>
                next
                </button>
            </div>
            </div>
        </Layout>
    )
}

export default User