import React from "react";
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div className="home_container">
            <h1>Home</h1>
            <Link to="/login" style={{
                textDecoration: 'none',
                color: "#1e66e3",
                marginRight: "10px"

            }}>LOGIN</Link>/

            <Link to="/signup" style={{
                textDecoration: 'none',
                color: "#1e66e3",
                marginLeft: "10px"

            }}>Регистрация</Link>
        </div>

    )

}

export default Home;