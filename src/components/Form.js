import React, { useEffect, useState, useCallback } from "react";
import Module from "./Module";
import Book from "./Book";
import * as pdfjsLib from "pdfjs-dist";
import { storage } from "../firebase-config";

function Form() {
  const [university, setUniversity] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [showModule, setShowModule] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [pdfExists, setPdfExists] = useState(false);

  useEffect(() => {
    if (university) {
      setSubjectCode("");
    }
  }, [university]);

  useEffect(() => {
    const checkPdfExists = async () => {
      const pdfPath = storage.ref().child(`pdfs/${subjectCode}.pdf`);

      try {
        await pdfPath.getDownloadURL();
        setPdfExists(true);
      } catch (error) {
        setPdfExists(false);
      }
    };

    checkPdfExists();
  }, [subjectCode]);

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleSubjectCodeChange = (event) => {
    const code = event.target.value.toUpperCase();
    setSubjectCode(code);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setShowModule(true);
    setShowBook(true);
    console.log("Subject Code is:", subjectCode);
    console.log("Selected university is:", university);

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.js";

    const pdfPath = storage.ref().child(`pdfs/${subjectCode}.pdf`);

    try {
      const url = await pdfPath.getDownloadURL();
      const loadingTask = pdfjsLib.getDocument(url);
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
      console.error("Error:", error);
      setErrorOccurred(true);
      alert(
        "An error occurred while processing the syllabus pdf. Please Upload PDF."
      );
    }
  };

  const handleFileUpload = async () => {
    if (file) {
      setUploading(true);
      const pdfPath = storage.ref().child(`pdfs/${subjectCode}.pdf`);

      try {
        await pdfPath.put(file);
        console.log("File uploaded successfully!");
        alert("File uploaded successfully");
        setPdfExists(true);
      } catch (error) {
        console.error("Error while uploading file:", error);
        alert(
          "An error occurred while uploading the file. Please try again later."
        );
      } finally {
        setUploading(false);
      }
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

      {errorOccurred && (
        <div className="file-input-container">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            id="lbl"
            style={{ display: "none" }}
          />

          <label for="lbl">Select your syllabus</label>
          <button onClick={handleFileUpload}>Upload</button>
        </div>
      )}

      {showModule && <Module />}
      {showBook && <Book />}
    </div>
  );
}

export default Form;
