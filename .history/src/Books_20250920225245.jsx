import booksData from "./data/books.json";

function Books({ isbn }) {
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
            <h3>{book.title}</h3>
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
