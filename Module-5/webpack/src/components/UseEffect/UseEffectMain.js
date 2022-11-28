import React , { useState } from "react";
import JSONPlaceholder from './JSONPlaceholder';

function UseEffectMain(){
    const [toggle, setToggle] = useState(false);
    return (
        <div className="container">
            <button className="btn btn-warning"
                onClick={() => setToggle(!toggle)}
            >Toggle Data</button>
            { toggle && <JSONPlaceholder/> }
        </div>
    )
}

export default UseEffectMain;