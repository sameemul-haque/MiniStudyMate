import React, { useEffect } from 'react';

function Form() {
  useEffect(() => {
    const university = document.getElementById('university');
    const subjectCode = document.getElementById('subject-code');
    const submitButton = document.getElementById('submit-button');

    // Event listener callback function
    const handleUniversityChange = () => {
      if (university.value) {
        subjectCode.style.display = 'inline-block';
        submitButton.style.display = 'inline-block';
      } else {
        subjectCode.style.display = 'none';
        submitButton.style.display = 'none';
      }
    };

    // Attach event listener
    university.addEventListener('change', handleUniversityChange);

    // Clean up the event listener when the component unmounts
    return () => {
      university.removeEventListener('change', handleUniversityChange);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div style={{ alignItems: 'flex-start' }}>
      <div className="input-group">
        <select id="university" required>
          <option selected disabled value="">Select your University</option>
          <option value="ktu">APJ Abdul Kalam Technological University</option>
          <option value="mg">MG University</option>
          <option value="calicut">Calicut University</option>
        </select>
      </div>

      <div id="subject-code" className="input-group" style={{ display: 'none', verticalAlign: 'top' }}>
        <input type="text" name="subjcode" id="subjcode" className="input" required />
        <label className="user-label">Subject Code</label>
      </div>

      <div id="submit-button" style={{ display: 'none', verticalAlign: 'top' }}>
        <button id="submitbtn">Submit</button>
      </div>
    </div>
  );
}

export default Form;
