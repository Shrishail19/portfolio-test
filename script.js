function showDetails(skill) {
  // Display the details div for the clicked skill
  const detailsDiv = document.getElementById(`${skill}Details`);
  detailsDiv.style.display = "block";
}

function hideDetails(skill) {
  // Hide the details div for the clicked skill
  const detailsDiv = document.getElementById(`${skill}Details`);
  detailsDiv.style.display = "none";
}
