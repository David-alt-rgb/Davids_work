document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentId').value.trim();
    const department = document.getElementById('department').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !id || !department || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Simulated success
    alert("Thank you for your feedback, " + name + "!");
    
    // Clear the form
    this.reset();
});
