// Function to calculate the grade based on the student's mark
function calculateGrade(mark) {
  // Check the mark range and return the corresponding grade
  if (mark > 79) {
    return 'A';
  } else if (mark >= 60) {
    return 'B';
  } else if (mark >= 50) {
    return 'C';
  } else if (mark >= 40) {
    return 'D';
  } else {
    return 'E';
  }
}

// Main function to generate the student's grade
function studentGradeGenerator() {
  // Prompt the user to enter the student's mark
  const mark = parseFloat(prompt('Enter the student mark (0-100):'));

  // Validate the input and return an error message if the input is invalid
  if (isNaN(mark) || mark < 0 || mark > 100) {
    return 'Invalid input. Please enter a valid mark between 0 and 100.';
  }

  // Call the calculateGrade function and return the student's grade
  const grade = calculateGrade(mark);
  return `The student's grade is: ${grade}`;
}

// Call the studentGradeGenerator function and log the result to the console
const result = studentGradeGenerator();
console.log(result);