import React, { useState, useEffect } from "react";
import bookData from "../data/book.json";
import "../css/book.css";
import axios from "axios";

function Book({ textbooks, references }) {
  const [showTextbooks, setShowTextbooks] = useState(false);
  const [showReferenceBooks, setShowReferenceBooks] = useState(false);
  const [textData, setTextData] = useState();
  const [referenceData, setReferenceData] = useState();

  const handleToggleTextbooks = () => {
    setShowTextbooks(!showTextbooks);
  };

  const handleToggleReferenceBooks = () => {
    setShowReferenceBooks(!showReferenceBooks);
  };
  useEffect(() => {
    Promise.all(textbooks)
      .then((results) => {
        setTextData(results);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, [textbooks]);

  useEffect(() => {
    Promise.all(references)
      .then((results) => {
        setReferenceData(results);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, [references]);

  console.log(referenceData);

  return (
    <div className="book-container">
      <div>
        <button className="book-button" onClick={handleToggleTextbooks}>
          Textbooks
        </button>
        {showTextbooks && (
          <div>
            <ul>
              {textData &&
                textData.map((textbook, index) => {
                  return (
                    <li key={index}>
                      <a href={textbook.link}>{textbook.name}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
      <div>
        <button className="book-button" onClick={handleToggleReferenceBooks}>
          Reference Books
        </button>
        {showReferenceBooks && (
          <div>
            <ul>
              {referenceData &&
                referenceData.map((referenceBook, index) => {
                  console.log(referenceBook.link);
                  return (
                    <li key={index}>
                      <a href={referenceBook.link}>{referenceBook.name}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;
