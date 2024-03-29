<div align="center">
  <h1 align="center">Studymate</h1>
  <img src="public/icon.svg" alt="Logo" width="100" height="100">
  <p align="center">
   Web-based Study Material Retrieval System <br/>
<a href="https://github.com/sameemul-haque/MiniStudyMate/issues"><img src="https://img.shields.io/badge/REQUEST%20FEATURES-STUDYMATE-blue?style=for-the-badge"></a>&nbsp;</p>
</div>

---
# StudyMate - Web-based Study Material Retrieval System

StudyMate is a simple and easy-to-use web-based platform for retrieving study materials. It is available at [ministudymate.web.app](https://ministudymate.web.app/) and is designed for students of APJ Abdul Kalam Technological University (KTU).

## Features

- **User-Friendly Interface**: StudyMate offers an intuitive and user-friendly interface, designed using React, making it easy for KTU students to find study materials for their subjects.
- **Text Extraction**: We use PDF.js for extracting text from syllabus PDFs. This feature allows us to categorize study materials based on topics.
- **Google Authentication**: We use Firebase for secure Google authentication, ensuring that KTU students can easily access the platform.
- **Syllabus PDF Storage**: We store syllabus PDFs, making it convenient for KTU students to access and search for specific study materials.
- **Textbook Retrieval**: StudyMate utilizes the SerpAPI to scrape Google and retrieve textbooks relevant to the selected subjects.
- **Study Material Videos**: We use the youtubei npm package to scrape YouTube and retrieve study material videos for various topics.
- **ScrapeAPI | SearchServer**: StudyMate is powered by [ScrapeAPI | SearchServer](https://github.com/Nuzaim/searchServer), a powerful API for scraping Google search results of a PDF link based on the user-given book name and YouTube search results based on a user-defined query. 

## Getting Started

1. Visit [StudyMate](https://ministudymate.web.app/) to access the platform.

2. Sign in using your Google account for easy access to study materials.

3. Select APJ Abdul Kalam Technological University (KTU) as your university and type your subject code to get started.

4. Browse and retrieve study materials, including textbooks and educational videos.

---

## Languages and Tools used:
[![React](https://img.shields.io/badge/REACT-88DDED?style=for-the-badge&logo=react&logoColor=333333 "React.js")](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=333333 "JavaScript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/FIREBASE-FFCA28?style=for-the-badge&logo=firebase&logoColor=333333 "Firebase")](https://firebase.google.com/docs)
[![pdf.js](https://img.shields.io/badge/PDF.JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=333333 "pdf.js")](https://github.com/mozilla/pdf.js)
[![Npm-Youtubei](https://img.shields.io/badge/npm--youtubei-CB3837?style=for-the-badge&logo=npm&logoColor=ffffff "NPM Package")](https://www.npmjs.com/package/youtubei)
[![SerpAPI](https://img.shields.io/badge/SerpAPI-141414?style=for-the-badge&logo=data:image/png;base64,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 "Serp API")](https://serpapi.com/)
[![Git](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=ffffff "Git")](https://git-scm.com/)
[![Github](https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github "Github")](https://github.com/)
[![VS Code](https://img.shields.io/badge/VS%20CODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=ffffff "Visual Studio Code")](https://code.visualstudio.com/)


---
