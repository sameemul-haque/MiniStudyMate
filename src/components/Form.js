import React, { useEffect, useState } from "react";
import Module from "./Module";
import Book from "./Book";
import * as pdfjsLib from "pdfjs-dist";

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setShowModule(true);
    setShowBook(true);
    console.log("Subject Code is:", subjectCode);
    console.log("Selected university is:", university);

    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.js`;

    const pdfPath = `${process.env.PUBLIC_URL}/pdfs/${subjectCode}.pdf`;

    try {
      const loadingTask = pdfjsLib.getDocument(pdfPath);
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;
      const textPromises = [];

      for (let i = 1; i <= numPages; i++) {
        textPromises.push(
          pdf.getPage(i).then((page) => {
            return page.getTextContent().then((textContent) => {
              return textContent.items.map((item) => item.str).join(" ");
            });
          })
        );
      }

      Promise.all(textPromises).then((pageTexts) => {
        const extractedText = pageTexts.join("\n");
        console.log("Extracted Text:", extractedText);
      });
    } catch (error) {
      console.error("Error while extracting text:", error);
      alert(
        "An error occurred while processing the syllabus pdf. Please try again later."
      );
    }
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
