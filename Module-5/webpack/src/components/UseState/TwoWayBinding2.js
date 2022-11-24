import React, { useState } from "react";

// One-way binding
// Two-way binding

function TwoWayBinding2() {

    const [state, setState] = useState({
        email: "",
        password: "",
        remember: false
    })

    const handleInputValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.name === "remember" ? e.target.checked : e.target.value
        })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(state);
    }

    const getUserInfo = () => {
        setState({
            ...state,
            email: "kien@gmail.com",
            password: "123123",
            remember : false
        })
    }

    const { email, password, remember } = state;
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"
                        value={email}
                        name="email"
                        onInput={handleInputValue}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        value={password}
                        name="password"
                        onInput={handleInputValue} />
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox"
                            className="form-check-input"
                            name="remember"
                            checked = {remember}
                            onChange={handleInputValue}
                        />
                        Remember me</label>
                </div>
                <div>
                    <button className="btn btn-dark" type="submit">Login</button>
                    <button className="btn btn-danger" type="button"
                        onClick={getUserInfo}
                    >User Info</button>
                </div>
            </form>
        </div>
    )

}
export default TwoWayBinding2;