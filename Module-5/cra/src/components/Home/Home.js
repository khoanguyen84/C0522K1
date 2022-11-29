import React from "react";
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="container">
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link to={"/book/vn/1"}>Harry Poster 1</Link>
                </li>
                <li>
                    <Link to={"/book/vn/2"}>Harry Poster 2</Link>
                </li>
                <li>
                    <Link to={"/book/vn/3"}>Harry Poster 3</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;