import { useState, useEffect } from "react";
import booksData from "./data/books.json";

function Books({ isbn }) {
    // 直接在 JSON 数据里查找书籍
    const book = booksData.find((b) => b.isbn13 === isbn);

    if (!book) {
        return <p>Book not found</p>;
    }

    return (
        <div className='books'>
            <img
                className='book-img'
                src={book.image}
                alt={book.title}
            />
            <p>{book.price}</p>
            <a
                className='learn-more-btn'
                href={book.url}
                target='_blank'
                rel='noopener noreferrer'>
                Learn More
            </a>
        </div>
    );
}

export default Books;
