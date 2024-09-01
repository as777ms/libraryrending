import { useState, useEffect } from 'react';

const Audiobooks = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("new audio");
  const [audiobooks, setAudiobooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Number of items per page

  useEffect(() => {
    const fetchAudiobooks = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${query}&has_fulltext=true&limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`
        );
        const data = await response.json();
        setAudiobooks(data.docs || []);
      } catch (error) {
        alert("Failed to fetch audiobooks. Please check your internet connection.");
      }
    };

    fetchAudiobooks();
  }, [query, currentPage]);

  const getSearch = (e) => {
    e.preventDefault();

    if (search !== "") {
      setQuery(search);
      setSearch("");
      setCurrentPage(1);
    } else {
      alert("Enter Audiobook Title!!");
    }
  };

  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrevious = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="container mx-auto px-2 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Audiobooks</h1>
      <div className="w-full lg:w-11/12 mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Find Audiobooks</h2>

        <form onSubmit={getSearch} className="flex mb-8 w-full">
          <input
            type="text"
            placeholder="Search Audiobook..."
            className="flex-grow py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-6 rounded-r-md hover:bg-blue-600 transition-colors duration-300"
          >
            Search
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {audiobooks.length > 0 ? (
            audiobooks.map((audiobook, key) => (
              <div key={key} className="bg-white shadow-md rounded-lg p-6 w-full h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{audiobook.title}</h3>
                  <p className="text-gray-600 mb-4">
                    Author: {audiobook.author_name?.join(", ")}
                  </p>
                  {audiobook.cover_i && (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${audiobook.cover_i}-M.jpg`}
                      alt={`${audiobook.title} cover`}
                      className="w-full h-64 object-cover mb-4 rounded-md"
                    />
                  )}
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={`https://openlibrary.org/works/${audiobook.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                  >
                    View Details
                  </a>
                  <a
                    href={`https://archive.org/details/${audiobook.edition_key?.[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
                  >
                    Listen
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No audiobooks found.</p>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-l-md hover:bg-gray-400 disabled:bg-gray-200 disabled:text-gray-400"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={audiobooks.length < itemsPerPage}
            className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 disabled:bg-blue-300 disabled:text-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audiobooks;
