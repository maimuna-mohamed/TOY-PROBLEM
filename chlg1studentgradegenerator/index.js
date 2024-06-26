// Function to determine the grade based on the marks
function getStudentGrade(marks) {
    // Check the marks and return the corresponding grade
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 49 && marks < 60) {
        return 'C';
    } else if (marks >= 40 && marks < 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Function to prompt the user for marks and display the grade
function promptForMarks() {
    // Prompt the user to enter the student's marks
    let marks = prompt("Enter the student's marks (0-100):");
    
    // Convert the input to an integer
    marks = parseInt(marks);

    // Check if the input is a valid number within the range 0-100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        // Alert the user if the input is not valid
        alert("Please enter a valid number between 0 and 100.");
    } else {
        // Get the grade based on the marks
        const grade = getStudentGrade(marks);
        
        // Display the grade to the user
        alert(`The grade is: ${grade}`);
    }
}

// Call the function to prompt for marks and display the grade
promptForMarks();