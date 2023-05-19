import React, { useState } from 'react';
import bookData from '../data/book.json';
import '../css/book.css';

function Book() {
  const [showTextbooks, setShowTextbooks] = useState(false);
  const [showReferenceBooks, setShowReferenceBooks] = useState(false);

  const handleToggleTextbooks = () => {
    setShowTextbooks(!showTextbooks);
  };

  const handleToggleReferenceBooks = () => {
    setShowReferenceBooks(!showReferenceBooks);
  };

  return (
    <div className="book-container">
      <div>
        <button onClick={handleToggleTextbooks}>
          {showTextbooks ? 'Textbooks' : 'Textbooks'}
        </button>
        {showTextbooks && (
          <div>
            <ul>
              {bookData.books.textbooks.map((textbook, index) => (
                <li key={index}>
                  <a href={textbook.link}>{textbook.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <button onClick={handleToggleReferenceBooks}>
          {showReferenceBooks ? 'Reference Books' : 'Reference Books'}
        </button>
        {showReferenceBooks && (
          <div>
            <ul>
              {bookData.books.referenceBooks.map((referenceBook, index) => (
                <li key={index}>
                  <a href={referenceBook.link}>{referenceBook.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;
