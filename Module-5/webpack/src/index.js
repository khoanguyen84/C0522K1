import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Main />
            <Footer/>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)