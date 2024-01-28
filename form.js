const registrationForm = document.getElementById("registration-form");
const enrolledStudentsTable = document.getElementById("enrolled-students");
const clearButton = document.getElementById("clear-button");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const studentData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    website: document.getElementById("website").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    skills: Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(checkbox => checkbox.value),
    image: document.getElementById("image").value,
    description: document.getElementById("description").value,
  };

  // Create a new table row and populate it with student data
  const newRow = document.createElement("tr");
  Object.entries(studentData).forEach(([key, value]) => {
    const td = document.createElement("td");
    td.textContent = value;
    newRow.appendChild(td);
  });

  enrolledStudentsTable.appendChild(newRow);

  // Clear the form
  registrationForm.reset();
});

clearButton.addEventListener("click", () => {
  enrolledStudentsTable.innerHTML = ""; // Clear the table
});
