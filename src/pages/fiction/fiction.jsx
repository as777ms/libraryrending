import { useState, useEffect } from 'react';
import './fiction.css'; // Add custom styles in Love.css
import { Link } from 'react-router-dom';

const Fiction = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('science fiction');
  const [books, setBooks] = useState([]);
  const [id, setId] = useState("");
  const [term, setTerm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [itemsPerPage] = useState(10); // Number of items per page

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=${(currentPage - 1) * itemsPerPage}&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items || []); // Ensure it's an array
      })
      .catch((error) => alert("internet nadori fetch galtid"));
  }, [query, currentPage]);

  const getSearch = (e) => {
    e.preventDefault();

    if (search !== '') {
      setQuery(search);
      setSearch('');
      setCurrentPage(1); // Reset to the first page on new search
    } else {
      alert('Enter Book Name!!');
    }
  };

  const checkIt = (id) => {
    setId(id);
    setTerm(true);
  };

  // Function to handle pagination
  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrevious = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="drama-container">
      <h1>Fiction</h1>
      <div className="App">
        <h1 className="title">Look Book</h1>

        <form onSubmit={getSearch} className="search-form">
          <input
            type="text"
            placeholder="Search Book..."
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        <div className="books">
          {books.length > 0 ? (
            books.map((book, key) => (
              <div key={key} className="book-item">
                <img
                  src={
                    book?.volumeInfo?.imageLinks
                      ? Object.values(book.volumeInfo.imageLinks)[0]
                      : ""
                  }
                  alt="cover img"
                  className="BookImg"
                />
                <div className="book-item-btns">
                  <a
                    href={book.volumeInfo.previewLink}
                    target="_blank"
                    rel="noreferrer"
                    className="preview-btn"
                  >
                    Preview
                  </a>
                  {book?.accessInfo.pdf["acsTokenLink"] !== undefined ? (
                    <button
                      className="read-btn"
                      onClick={() => checkIt(book?.id)}
                    >
                      Read Online
                    </button>
                  ) : (
                    <h3 className="null-point">Not Available</h3>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No books found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={books.length < itemsPerPage}
            className="pagination-btn"
          >
            Next
          </button>
        </div>

        {term && (
          <div className="reading-block">
            <button className="close-btn" onClick={() => setTerm(false)}>
              X
            </button>
            <iframe
              src={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`}
              title="Pdf Viewer"
              className="iframe"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fiction;
