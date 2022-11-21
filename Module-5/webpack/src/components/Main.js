import React from "react";
import Content from "./Content";
import LeftSide from './LeftSide';

function Main(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <LeftSide/>
                </div>
                <div className="col-md-9">
                    <Content/>
                </div>
            </div>
        </div>
    )
}

export default Main;