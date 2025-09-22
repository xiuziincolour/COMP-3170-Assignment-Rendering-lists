import { useState } from "react";
import Books from "./Books";
import booksData from "./data/books.json";
import "./App.css";

function App() {
    const [books, setBooks] = useState(booksData);

    const handleAdd = () => {
        const newBook = {
            title: `New Book ${books.length + 1}`,
            isbn13: `0000${books.length + 1}`,
            price: `$${(Math.random() * 20).toFixed(2)}`,
            image: "https://via.placeholder.com/150",
            url: "#",
        };
        setBooks([...books, newBook]);
    };

    return (
        <div className='app-container'>
            <div className='grid'>
                {books.map((book) => (
                    <Books
                        key={book.isbn13}
                        isbn={book.isbn13}
                    />
                ))}

                {/* Add 按钮 */}
                <button
                    className='add-btn'
                    onClick={handleAdd}>
                    + Add
                </button>
            </div>
        </div>
    );
}

export default App;
