import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    <h3 className="d-flex">
                        <i className="fa-solid fa-book-open-reader text-warning me-2"></i>
                        BookStore
                    </h3>

                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to={"/"}>Trang chủ</Link>
                        <Link className="nav-link" to={"/vietnam"}>Việt Nam</Link>
                        {/* <Link className="nav-link" href="#">Nước Ngoài</Link> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;