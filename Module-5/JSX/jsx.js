// component
// function component
// class component

// function App(){
//     const heading = "HTML CSS từ Zero đến Hero";
//     const handleReadMore = () => alert('read more ..');
//     return (
//         <React.Fragment>
//             <h1 className="heading" style={{backgroundColor: "green", color:"white"}}>{heading}</h1>
//             <ul>
//                 <li>Biết cách xây dựng giao diện web với HTML, CSS</li>
//                 <li>Biết cách đặt tên class CSS theo chuẩn BEM</li>
//             </ul>
//             <button onClick={handleReadMore}>Read more...</button>
//         </React.Fragment>
//     )
// }

class App extends React.Component {
    render() {
        const heading = "HTML CSS từ Zero đến Hero";
        const handleReadMore = () => alert('read more ..');
        return (
            <React.Fragment>
                <h1 className="heading" style={{ backgroundColor: "green", color: "white" }}>{heading}</h1>
                <ul>
                    <li>Biết cách xây dựng giao diện web với HTML, CSS</li>
                    <li>Biết cách đặt tên class CSS theo chuẩn BEM</li>
                </ul>
                <button onClick={handleReadMore}>Read more...</button>
            </React.Fragment>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />)