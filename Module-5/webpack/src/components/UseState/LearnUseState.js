import React, { useState } from "react";

// useState: dùng để quản lý việc thay đổi trạng thái dữ liệu,
// mỗi khi dữ liệu thay đổi trạng thái, thì mình phản ứng như thế nào?
// const [state, setState] = useState(initState);
// lần đầu tiên thực hiện thì state = initState
// nhiệm vụ của setState cập nhật giá trị trong state.
// initState: bất kể dữ liệu nào của JS
//              + Các kiểu dữ liệu nguyên thủy (number, boolean, string)
//              + object, array, function

// Mỗi khi state thay đổi thì component sẽ được re-render
// Nếu có thay đổi nhiều state cùng 1 lúc thì component chỉ re-render 1 lần

// setState()
//      + thay đổi trực tiếp
//      + sử dụng callback

function LearnUseState(){
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((preState) => {
            return preState + 1;
        });
        setCount((preState) => {
            return preState + 1;
        });
        setCount((preState) => {
            return preState + 1;
        });
        // setCount(count + 1);
        // setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className="btn btn-primary"
                onClick={handleIncrement}
            >Increment</button>
            {console.log(`re-render ${count}`)}
        </div>
    )
}

export default LearnUseState;