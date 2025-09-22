import BookData from "./data/books.json";
import Books from "./Books";
import AddMore from "./AddMore";
import "./App.css";

function App() {
    return (
        <div className='BookCatalog'>
            <header className='header'>
                <h1>Book Catalog</h1>
            </header>

            <main className='main'>
                <div className='grid-container'>
                    <div className='newbook-column'>
                        <AddMore />
                    </div>
                    <div className='books-grid'>
                        {BookData.map((book) => (
                            <Books
                                image={book.image}
                                alt={book.title}
                                title={book.title}
                                price={book.price}
                                url={book.url}
                                key={book.isbn13}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <footer className='footer'>
                <p>Xiuzi Guo 2025</p>
                <p>A01409690</p>
            </footer>
        </div>
    );
}

export default App;
