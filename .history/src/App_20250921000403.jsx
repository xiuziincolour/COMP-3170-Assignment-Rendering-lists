import data from "./data/books.json";
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
                <Books isbn='9780321812186' />
                <Books isbn='9781484243947' />
                <Books isbn='9780137843749' />
                <Books isbn='9780321683915' />
                <Books isbn='9780321832740' />
                <Books isbn='9780321918963' />
                <Books isbn='9780596517748' />
                <Books isbn='9780596802790' />
                <Books isbn='9780596805784' />
            </main>

            <footer className='footer'>
                <p>Xiuzi Guo 2025</p>
                <p>A01409690</p>
            </footer>
        </div>
    );
}

export default App;
