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
          className="w-full md:w-1/2 mx-auto mb-4 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
          <a
            href={book.volumeInfo.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Preview
          </a>
          {book.accessInfo.pdf && book.accessInfo.pdf.isAvailable ? (
            <button
              className="read-btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={checkIt}
            >
              Read Online
            </button>
          ) : (
            <h3 className="null-point text-red-500">Not Available</h3>
          )}
          <a
            href={book.volumeInfo.infoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="info-link bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Info Link
          </a>
          <a
            href={book.volumeInfo.canonicalVolumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="canonical-link bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Canonical Link
          </a>
        </div>
      </motion.div>

      {term && (
        <div className="reading-block fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <button
            className="close-btn absolute top-4 right-4 text-white text-2xl"
            onClick={() => setTerm(false)}
          >
            X
          </button>
          <iframe
            src={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`}
            title="Pdf Viewer"
            className="iframe w-full h-full"
          ></iframe>
        </div>
      )}

      <div className="">
        <div className="recommendations bg-yellow-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Recommendations</h2>
          <p>Check out these other great books!</p>
        </div>
        <div className="advertisement bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Advertisement</h2>
          <p>Promote your book here!</p>
        </div>
      </div>
    </div>
  );
};

export default Infobooksbyid;
