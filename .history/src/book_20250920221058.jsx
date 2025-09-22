function Book({ title, price }) {
    return (
        <div className='book-card'>
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
    );
}

export default Book;
