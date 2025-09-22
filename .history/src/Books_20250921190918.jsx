export default function Books({ image, title, price, url }) {
    return (
        <div className='books'>
            <img
                className='book-img'
                src={image}
                alt={title}
            />
            <p>{price}</p>
            <a
                className='learn-more-btn'
                href={url}
                target='_blank'
                rel='noopener noreferrer'>
                Learn More
            </a>
        </div>
    );
}
