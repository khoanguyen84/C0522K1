import React, { useState } from "react";

const gifts = ["Laptop", "iPhone 14", "Bag", "Headphones"]
function RandomGift() {
    const [gift, setGift] = useState();
    const handleGetGift = () => {
        let randomIndex = Math.floor(Math.random() * gifts.length);
        setGift(gifts[randomIndex]);
    }
    return (
        <div>
            <h1>{gift || 'Click on button below to get gift'}</h1>
            <button className="btn btn-success"
                onClick={handleGetGift}
            >Get Gift</button>
        </div>
    )
}

export default RandomGift