import Navbar from "../Components/Navbar" 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from "../Components/Layout"
function Home () {
    const Navigate = useNavigate();
    const token = localStorage.getItem('access_token')

    const logout = () => {
        localStorage.removeItem('access_token')
        Navigate('/login')
    }

    return (
        <Layout>
            {token ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <Link to={'/login'}>
                    <h1>Login</h1>
                </Link>
            )}
            <h1>Home</h1>
        </Layout>
    )
}

export default Home