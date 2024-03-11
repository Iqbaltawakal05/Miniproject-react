const Card = () => {
    return (
        <div className="user">
            <img src={item.avatar} alt=""/>
            <h1>{item.first_name}</h1>
            <p>{item.email}</p>
            <Link to={`/user/${item.id}`}>
                <button>Detail</button>
            </Link>
        </div>
    )
}

export default Card