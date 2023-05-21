import React, { useEffect, useState } from "react";
import Module from "./Module";
import Book from "./Book";

function Form() {
  const [university, setUniversity] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [showModule, setShowModule] = useState(false);
  const [showBook, setShowBook] = useState(false);

  useEffect(() => {
    if (university) {
      setSubjectCode("");
    }
  }, [university]);

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleSubjectCodeChange = (event) => {
    setSubjectCode(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowModule(true);
    setShowBook(true);
  };

  return (
    <div style={{ alignItems: "flex-start" }}>
      <br />
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <select
            value={university}
            onChange={handleUniversityChange}
            style={{ verticalAlign: "top" }}
            required
          >
            <option disabled value="">
              Select your University
            </option>
            <option value="ktu">
              APJ Abdul Kalam Technological University
            </option>
            <option value="mg">MG University</option>
            <option value="calicut">Calicut University</option>
          </select>
        </div>
        <br />
        {university && (
          <div className="input-group">
            <input
              type="text"
              name="subjcode"
              value={subjectCode}
              onChange={handleSubjectCodeChange}
              className="input"
              required
            />
            <label className="user-label">Subject Code</label>
          </div>
        )}

        {university && subjectCode && (
          <div id="submit-button">
            <button type="submit" id="submitbtn">
              Submit
            </button>
          </div>
        )}
      </form>

      {showModule && <Module />}
      {showBook && <Book />}
    </div>
  );
}

export default Form;
