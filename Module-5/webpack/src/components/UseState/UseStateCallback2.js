import React, { useState } from "react";

const bills = [150000, 170000, 250000];

function UseStateCallback2() {
    const [totalAmout, setTotalAmout] = useState(() => {
        const result = bills.reduce((total, bill) => total + bill)
        return result;
    });
    const [amount, setAmount] = useState();

    const handPrintBill = (e) => {
        e.preventDefault()
        setTotalAmout(totalAmout + amount);
        setAmount("");
    }
    return (
        <div>
            <form onSubmit={handPrintBill}>
                <input type="number" className="form-control"
                    value={amount}
                    onInput={(e) => setAmount(Number(e.target.value))}
                />
                <h1>Tổng tiền: {totalAmout}</h1>
                <button type="submit" className="btn btn-warning"
                >Print Bill</button>
            </form>
        </div>
    )
}

export default UseStateCallback2;