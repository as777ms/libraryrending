import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Audiobooks = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("prison");
  const [audiobooks, setAudiobooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    const fetchAudiobooks = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${query}&has_fulltext=true&limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`
        );
        const data = await response.json();
        setAudiobooks(data.docs || []);
      } catch (error) {
        alert(t("Failed to fetch audiobooks. Please check your internet connection."));
      }
    };

    fetchAudiobooks();
  }, [query, currentPage, t]);

  const getSearch = (e) => {
    e.preventDefault();

    if (search !== "") {
      setQuery(search);
      setSearch("");
      setCurrentPage(1);
    } else {
      alert(t("Enter Audiobook Title!!"));
    }
  };

  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrevious = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-4 text-center">{t('Audiobooks')}</h1>
      
      <form onSubmit={getSearch} className="flex justify-center mb-8">
        <input
          type="text"
          placeholder={t('Search Audiobook...')}
          className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 text-white rounded-r-md px-4 py-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {t('Search')}
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {audiobooks.length > 0 ? (
          audiobooks.map((audiobook, key) => (
            <div key={key} className="bg-transparent p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{audiobook.title}</h3>
              <p className="text-gray-600 mb-4">
                {t('Author')}: {audiobook.author_name?.join(", ")}
              </p>
              {audiobook.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${audiobook.cover_i}-M.jpg`}
                  alt={`${audiobook.title} cover`}
                  className="w-full h-64 object-cover mb-4 rounded-md"
                />
              )}
              <div className="flex justify-between items-center">
                <a
                  href={`https://openlibrary.org/works/${audiobook.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {t('View Details')}
                </a>
                <a
                  href={`https://archive.org/details/${audiobook.edition_key?.[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white rounded px-4 py-2 hover:bg-blue-500"
                >
                  {t('Listen')}
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">{t('No audiobooks found.')}</p>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-600 rounded px-4 py-2 hover:bg-gray-400 disabled:opacity-50"
        >
          {t('Previous')}
        </button>
        <button
          onClick={handleNext}
          disabled={audiobooks.length < itemsPerPage}
          className="bg-gray-300 text-gray-600 rounded px-4 py-2 hover:bg-gray-400 disabled:opacity-50"
        >
          {t('Next')}
        </button>
      </div>
    </div>
  );
};

export default Audiobooks;
