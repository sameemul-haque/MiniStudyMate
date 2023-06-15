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

  function searchResult(query){
    axios.get('https://api.codetabs.com/v1/proxy?quest=https://serpapi.com/search.json?engine=google&q=Coffee&google_domain=google.com&hl=en&api_key=d68649707c3bad6349351b40011370ff9f352057dce7861280c5d970e7617db4')
    .then(response => {
      const jsonData = response.data;
      console.log(jsonData.organic_results[0].link);
      return(jsonData.organic_results[0].link);
    })
    .catch(error => {
      return(error);
    });
  }

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
              {textbooks.map((textbook, index) => (
                <li key={index}>
                  <a href={searchResult(textbook)}>{textbook}</a>
                </li>
              ))}
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
