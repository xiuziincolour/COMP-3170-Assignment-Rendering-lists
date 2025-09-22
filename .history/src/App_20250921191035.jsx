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
                <AddMore />
                {BookData.map((book) => (
                    <Books
                        image={book.image}
                        alt={book.title}
                        title={book.title}
                        price={book.price}
                        url={book.url}
                        key={book.isbn}
                    />
                ))}
            </main>

            <footer className='footer'>
                <p>Xiuzi Guo 2025</p>
                <p>A01409690</p>
            </footer>
        </div>
    );
}

export default App;
