export default function Books({ book }) {
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
