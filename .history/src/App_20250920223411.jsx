import booksData from "./data/books.json";
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
                {booksData.map((book) => (
                    <Books key={book.isbn} isbn={book.isbn} />
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
