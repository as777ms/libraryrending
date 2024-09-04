import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Infobooksbyid.css';

const Infobooksbyid = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState(false);

  const fetchBookDetails = async (retryCount = 0) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      console.log("Book Details:", response.data);
      setBook(response.data);
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        const waitTime = Math.pow(2, retryCount) * 1000; 
        if (retryCount < 5) {
          console.log(`Retrying after ${waitTime} ms...`);
          setTimeout(() => fetchBookDetails(retryCount + 1), waitTime);
        } else {
          console.error("Exceeded retry limit.");
          setLoading(false);
        }
      } else {
        console.error("Error fetching book details:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (!book) {
    return <p className="text-center text-xl">Book not found.</p>;
  }

  const checkIt = () => {
    setTerm(true);
  };

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 shadow-lg rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-4">{book.volumeInfo.title}</h1>
        <p className="text-lg mb-2"><strong>Subtitle:</strong> {book.volumeInfo.subtitle}</p>
        <p className="text-lg mb-2"><strong>Author(s):</strong> {book.volumeInfo.authors?.join(', ')}</p>
        <p className="text-lg mb-2"><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
        <p className="text-lg mb-2"><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
        <p className="text-lg mb-4"><strong>Description:</strong> {book.volumeInfo.description}</p>
        <motion.img
          src={book.volumeInfo.imageLinks?.thumbnail || "path/to/default/image.jpg"}
          alt="cover img"
          onError={(e) => { e.target.onerror = null; e.target.src = "path/to/default/image.jpg"; }}
          className="w-full md:w-1/3 mx-auto rounded-lg shadow-md mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="flex justify-between items-center">
          <a
            href={book.volumeInfo.previewLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Preview
          </a>
          {book.accessInfo.pdf?.acsTokenLink ? (
            <button
              onClick={checkIt}
              className="bg-green-400 text-white rounded px-2 py-1 hover:bg-green-500 text-sm"
            >
              Read Online
            </button>
          ) : (
            <span className="text-gray-600">Not Available</span>
          )}
        </div>
      </motion.div>

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

export default Infobooksbyid;
