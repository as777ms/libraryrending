import { useState, useEffect } from 'react';

const Books = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('survive');
  const [books, setBooks] = useState([]);
  const [id, setId] = useState("");
  const [term, setTerm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=${(currentPage - 1) * itemsPerPage}`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items || []);
      })
      .catch((error) => alert("internet nadori fetch galtid"));
  }, [query, currentPage]);

  const getSearch = (e) => {
    e.preventDefault();

    if (search !== '') {
      setQuery(search);
      setSearch('');
      setCurrentPage(1);
    } else {
      alert('Enter Book Name!!');
    }
  };

  const checkIt = (id) => {
    setId(id);
    setTerm(true);
  };

  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrevious = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Introductory Text */}
      {query === 'survive' && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-center text-gray-700">
            Discover a wide range of free books available on our site!
          </h2>
        </div>
      )}

      <form onSubmit={getSearch} className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search Book..."
          className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-sky-400 text-white rounded-r-md px-4 py-2 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Search
        </button>
      </form>

      {/* Introductory Text After Search */}
      {query !== 'survive' && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-center text-gray-700">
            Enjoy browsing through a variety of free books on our site!
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length > 0 ? (
          books.map((book, key) => (
            <div key={key} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={
                  book?.volumeInfo?.imageLinks
                    ? Object.values(book.volumeInfo.imageLinks)[0]
                    : ""
                }
                alt="cover img"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center">
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-500 hover:underline"
                >
                  Preview
                </a>
                {book?.accessInfo.pdf["acsTokenLink"] !== undefined ? (
                  <button
                    className="bg-sky-400 text-white rounded px-4 py-2 hover:bg-sky-500"
                    onClick={() => checkIt(book?.id)}
                  >
                    Read Online
                  </button>
                ) : (
                  <h3 className="text-gray-600">Not Available</h3>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">No books found.</p>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-600 rounded px-4 py-2 hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={books.length < itemsPerPage}
          className="bg-gray-300 text-gray-600 rounded px-4 py-2 hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {term && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl p-8 bg-white rounded-lg">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
              onClick={() => setTerm(false)}
            >
              X
            </button>
            <iframe
              src={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`}
              title="Pdf Viewer"
              className="w-full h-96 rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
