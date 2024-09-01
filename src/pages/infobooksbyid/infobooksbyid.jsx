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
        // Wait for a specific time and retry
        const waitTime = Math.pow(2, retryCount) * 1000; // Exponential backoff
        if (retryCount < 5) { // Limit retries to prevent infinite loops
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
    return <p>Loading...</p>;
  }

  if (!book) {
    return <p>Book not found.</p>;
  }

  const checkIt = () => {
    setTerm(true);
  };

  return (
    <div className="book-details-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="book-details"
      >
        <h1>{book.volumeInfo.title}</h1>
        <p>Subtitle: {book.volumeInfo.subtitle}</p>
        <p>Author(s): {book.volumeInfo.authors?.join(', ')}</p>
        <p>Publisher: {book.volumeInfo.publisher}</p>
        <p>Published Date: {book.volumeInfo.publishedDate}</p>
        <p>Description: {book.volumeInfo.description}</p>
        <motion.img
          src={book.volumeInfo.imageLinks?.thumbnail || "path/to/default/image.jpg"}
          alt="cover img"
          onError={(e) => { e.target.onerror = null; e.target.src = "path/to/default/image.jpg" }}
          className="BookImg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="book-links">
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="preview-btn">Preview</a>
          {book.accessInfo.pdf && book.accessInfo.pdf.isAvailable ? (
            <button className="read-btn" onClick={checkIt}>
              Read Online
            </button>
          ) : (
            <h3 className="null-point">Not Available</h3>
          )}
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">Info Link</a>
          <a href={book.volumeInfo.canonicalVolumeLink} target="_blank" rel="noopener noreferrer">Canonical Link</a>
        </div>
      </motion.div>

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

      <div className="recommendations-advertisement">
        <div className="recommendations">
          <h2>Recommendations</h2>
          <p>Check out these other great books!</p>
        </div>
        <div className="advertisement">
          <h2>Advertisement</h2>
          <p>Promote your book here!</p>
        </div>
      </div>
    </div>
  );
};

export default Infobooksbyid;