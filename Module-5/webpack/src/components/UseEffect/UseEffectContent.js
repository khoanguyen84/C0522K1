import React, { useState, useEffect } from "react";

// useEffect(callback, [deps])
// callback sẽ được gọi sau khi component được render
// có 3 trường hợp sử dụng
// Trường hợp 1: useEffect(callback)
// Khi component được mount DOM thì callback sẽ được thực thi
// Khi state thay đổi thì callback sẽ được thực thi

// Trường hợp 2: useEffect(callback, [])
// callback chỉ được gọi 1 lần duy nhất khi component được mounted vào DOM

// Trường hợp 2: useEffect(callback, [deps])
// callback sẽ được thực khi khi giá trị trong deps thay đổi

function UseEffectContent() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        // console.log('callback useEffect');
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })
        // cleanup function
        return () => {
            // hàm này được thực thi, khi component unmounted khỏi DOM
            console.log("unmounted");
        }
    }, [email, password])
    return (
        <>
            <div className="container">
                <h1>Content</h1>
                <input type="email" className="form-control"
                    onInput={(e) => setEmail(e.target.value)}
                />
                <input type="password" className="form-control"
                    onInput={(e) => setPassword(e.target.value)}
                />
                {/* {console.log("render UI")} */}
            </div>
            <div className="container">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UseEffectContent;