import React, { useState } from "react";
import bookData from "../data/book.json";
import "../css/book.css";
import axios from "axios";

function Book({textbooks, references}) {
  const [showTextbooks, setShowTextbooks] = useState(false);
  const [showReferenceBooks, setShowReferenceBooks] = useState(false);

  const handleToggleTextbooks = () => {
    setShowTextbooks(!showTextbooks);
  };

  const handleToggleReferenceBooks = () => {
    setShowReferenceBooks(!showReferenceBooks);
  };

  console.log(textbooks);

  return (
    <div className="book-container">
      <div>
        <button onClick={handleToggleTextbooks}>
          Textbooks
        </button>
        {showTextbooks && (
          <div>
            <ul>
              { textbooks && textbooks.map((textbook, index) => {
                return(
                <li key={index}>
                  <a href={textbook.link}>{textbook.name}</a>
                </li>
              )})}
            </ul>
          </div>
        )}
      </div>
      <div>
        <button onClick={handleToggleReferenceBooks}>
          Reference Books
        </button>
        {showReferenceBooks && (
          <div>
            <ul>
              {references.map((referenceBook, index) => (
                <li key={index}>
                  <a href={`referenceBook.link`}>{referenceBook}</a>
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
