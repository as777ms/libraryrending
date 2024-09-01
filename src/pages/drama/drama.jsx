import { useState, useEffect, useRef } from 'react';
import "./drama.css";
import * as THREE from 'three';

const Drama = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('drama novel');
  const [books, setBooks] = useState([]);
  const [id, setId] = useState("");
  const [term, setTerm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const containerRef = useRef();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=${(currentPage - 1) * itemsPerPage}&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items || []);
      })
      .catch((error) => alert("Internet nadori fetch galtid"));
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

  useEffect(() => {
    // Initialize Three.js galaxy background
    const initGalaxy = () => {
      const container = containerRef.current;
      if (!container) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // Add galaxy effects here
      // Example: Add a star field
      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
      const starVertices = [];

      for (let i = 0; i < 10000; i++) {
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);
        starVertices.push(x, y, z);
      }

      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
      const starField = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(starField);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        starField.rotation.x += 0.0005;
        starField.rotation.y += 0.0005;
        renderer.render(scene, camera);
      };

      animate();

      // Handle window resizing
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        container.removeChild(renderer.domElement);
      };
    };

    const cleanupHandler = initGalaxy();

    return cleanupHandler;
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white ml-[100px]">
      <div ref={containerRef} className="absolute inset-0 z-0"></div>
      <div className="relative z-10 w-full p-8 min-h-screen text-white">
        <h1 className="text-6xl text-center font-bold text-cosmic-blue mb-8 neon-text">Drama</h1>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={getSearch} className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search Book..."
              className="w-full max-w-md p-4 border-2 border-cosmic-blue rounded-l-lg text-white bg-black bg-opacity-50 placeholder-cosmic-blue focus:outline-none focus:ring-4 focus:ring-cosmic-blue neon-text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-4 text-white font-semibold rounded-r-lg hover:bg-cosmic-blue-dark transition duration-300 neon-text"
            >
              Search
            </button>
          </form>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {books.length > 0 ? (
              books.map((book, key) => (
                <div
                  key={key}
                  className="bg-black bg-opacity-50 p-6 rounded-lg shadow-neon hover:shadow-neon-brighter transition-shadow duration-300 cosmic-card"
                >
                  <img
                    src={
                      book?.volumeInfo?.imageLinks
                        ? Object.values(book.volumeInfo.imageLinks)[0]
                        : ""
                    }
                    alt="cover img"
                    className="w-full h-64 object-cover rounded-md mb-4 border border-cosmic-blue"
                  />
                  <div className="flex justify-between items-center">
                    <a
                      href={book.volumeInfo.previewLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-cosmic-blue text-black font-semibold rounded hover:bg-cosmic-blue-dark transition duration-300 cosmic-button"
                    >
                      Preview
                    </a>
                    {book?.accessInfo.pdf["acsTokenLink"] !== undefined ? (
                      <button
                        className="px-4 py-2 bg-cosmic-green text-black font-semibold rounded hover:bg-cosmic-green-dark transition duration-300 cosmic-button"
                        onClick={() => checkIt(book?.id)}
                      >
                        Read Online
                      </button>
                    ) : (
                      <h3 className="text-red-500 font-semibold">Not Available</h3>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center">No books found.</p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-2 bg-white text-black font-semibold rounded-lg hover:bg-cosmic-blue-dark transition duration-300 cosmic-button ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={books.length < itemsPerPage}
              className={`px-4 py-2 mx-2 bg--blue text-black font-semibold rounded-lg hover:bg-cosmic-blue-dark transition duration-300 cosmic-button ${books.length < itemsPerPage && 'opacity-50 cursor-not-allowed'}`}
            >
              Next
            </button>
          </div>

          {term && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 cosmic-overlay">
              <div className="relative w-full max-w-4xl bg-black p-8 rounded-lg shadow-neon cosmic-modal">
                <button
                  className="absolute top-4 right-4 bg-red-500 text-white font-bold rounded-full p-2 hover:bg-red-700 transition duration-300 cosmic-button"
                  onClick={() => setTerm(false)}
                >
                  X
                </button>
                <iframe
                  src={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`}
                  title="Pdf Viewer"
                  className="w-full h-96 rounded-lg cosmic-iframe"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drama;