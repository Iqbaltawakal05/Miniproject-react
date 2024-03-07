import { useNavigate } from 'react-router-dom';
function Home () {
    const Navigate = useNavigate();
    const token = localStorage.getItem('access_token')

    const logout = () => {
        localStorage.removeItem('access_token')
        Navigate('/login')
    }

    return (
        <div>
            {token ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <Link to={'/login'}>
                    <h1>Login</h1>
                </Link>
            )}
            <h1>Home</h1>
        </div>
    )
}

export default Home