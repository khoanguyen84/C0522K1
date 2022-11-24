import React, { useState, useRef } from "react";

const bills = [150000, 170000, 250000];

function UseStateCallback(){
    // const result = bills.reduce((total, bill) => total + bill);
    // const [totalAmout, setTotalAmout] = useState(result);
    const [totalAmout, setTotalAmout] = useState(() => {
        const result = bills.reduce((total, bill) => total + bill)
        return result;
    });

    const inputAmount = useRef();

    const [amount, setAmount] = useState();

    const handPrintBill = () => {
        setTotalAmout(totalAmout + amount);
        setAmount();
        inputAmount.current.focus();
    }
    return (
        <div>
            <input type="number" className="form-control"
                ref={inputAmount}
                value={amount}
                onInput={(e) => setAmount(Number(e.target.value))}
                />
            <h1>Tổng tiền: {totalAmout}</h1>
            <button className="btn btn-warning"
                onClick={handPrintBill}
            >Print Bill</button>
        </div>
    )
}

export default UseStateCallback;