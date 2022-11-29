import React from "react";
import { useParams } from 'react-router-dom';

function BookDetail(){

    const { catid, bookid } = useParams();
    return (
        <div className="container">
            <h1>Book detail {catid} - {bookid}</h1>
        </div>
    )
}

export default BookDetail;