import React, { useState, useEffect } from "react";

const tabs = ["posts", "comments", "users"]
function JSONPlaceholder() {
    const [tab, setTab] = useState("posts");
    const [state, setState] = useState({
        loading: false,
        data: [],
        errorMessage: ""
    });
    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                fetch(`https://jsonplaceholder.typicode.com/${tab}`)
                    .then(async (res) => {
                        let resData = await res.json();
                        setState({
                            ...state,
                            data: resData,
                            loading: false
                        });
                    })
            }
            getData();
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    }, [tab])

    const { loading, data, errorMessage } = state;
    return (
        <>
            <div className="container my-3">
                {tabs.map(item => (
                    <button key={item}
                        className={`btn ${item === tab ? 'btn-warning' : 'btn-primary'} me-2 `}
                        onClick={() => setTab(item)}
                    >{item}</button>
                ))}
            </div>
            <div className="container">
                {
                    loading ? <p>Loading...</p> : (
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
                                    data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title || item.email}</td>
                                            <td>{item.body || item.username}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>

        </>

    )
}

export default JSONPlaceholder;