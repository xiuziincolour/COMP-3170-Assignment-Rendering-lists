import { useEffect, useState } from "react";
import data from "./data/books.json";

function Books({ isbn }) {
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${isbn}`)
            .then((res) => res.json())
            .then((data) => setBook(data))
            .catch((error) => {
                console.error("Error fetching book:", error);
                setBook(null);
            });
    }, [isbn]);

    if (!book) return null;

    return (
        <div className='books'>
            <img
                className='book-img'
                src={book.image}
                alt={book.title}
            />
            <p>{book.authors}</p>
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
