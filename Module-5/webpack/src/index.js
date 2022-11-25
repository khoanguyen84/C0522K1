import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './index.css';

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