const university = document.getElementById('university');
const subjectCode = document.getElementById('subject-code');
const submitButton = document.getElementById('submit-button');

university.addEventListener('change', () => {
  if (university.value) {
    subjectCode.style.display = 'inline-block';
    submitButton.style.display = 'inline-block';
  } else {
    subjectCode.style.display = 'none';
    submitButton.style.display = 'none';
  }
});