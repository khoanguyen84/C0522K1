import React, { useState } from "react";

// One-way binding
// Two-way binding

function TwoWayBinding(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({
            email: email,
            password: password
        });
    }

    const getUserInfo = () => {
        setEmail("kien@gmail.com");
        setPassword("12345");
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" 
                        value={email}
                        onInput={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                            className="form-control"
                            value={password}
                            onInput={(e) => setPassword(e.target.value)}/>
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
export default TwoWayBinding;