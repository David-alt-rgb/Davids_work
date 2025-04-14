// Simulate a student & fines database
const studentDB = {
    "202301234": {
        name: "David Sumaila Atuwe",
        contact: "0556356630",
        fines: [
            { fineId: "F001", transId: "T001", amount: 25, status: "Unpaid", book: "Java Programming" },
            { fineId: "F002", transId: "T002", amount: 10, status: "Paid", book: "Database Systems" }
        ]
    }
};

function searchStudent() {
    const studentId = document.getElementById("studentId").value.trim();
    const info = document.getElementById("student-info");
    const fineSection = document.getElementById("fine-details");
    const nameField = document.getElementById("studentName");
    const contactField = document.getElementById("studentContact");
    const tableBody = document.getElementById("fineTableBody");

    // Reset fields
    nameField.textContent = "---";
    contactField.textContent = "---";
    tableBody.innerHTML = "";
    info.classList.add("hidden");
    fineSection.classList.add("hidden");

    if (studentDB[studentId]) {
        const student = studentDB[studentId];
        nameField.textContent = student.name;
        contactField.textContent = student.contact;

        student.fines.forEach(fine => {
            const row = `
                <tr>
                    <td>${fine.fineId}</td>
                    <td>${fine.transId}</td>
                    <td>${fine.amount}</td>
                    <td>${fine.status}</td>
                    <td>${fine.book}</td>
                </tr>`;
            tableBody.innerHTML += row;
        });

        info.classList.remove("hidden");
        fineSection.classList.remove("hidden");
    } else {
        alert("No student found with ID: " + studentId);
    }
}
