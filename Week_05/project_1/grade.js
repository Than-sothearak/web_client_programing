function checkGrade() {
  // Step 1: Get student name
  let studentName = prompt("Enter student name:");

  // Step 2: Get student score

  if (!isNaN(studentName)) {
    alert("Student name cannot be number!");
    return;
  }
  let score = Number(prompt("Enter student score:"));
  
  if (score < 0 || score > 100) {
    alert("Invalid Score!");
    return;
  }

  // Step 4: Create grade variable
  let grade;

  // Step 5: Check grade
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else {
    grade = "F";
  }

  // Step 6: Show result
  alert(
    "Student Name: " + studentName + "\nScore: " + score + "\nGrade: " + grade,
  );

  // Bonus Challenge
  if (score === 100) {
    alert("Excellent Work!");
  }
}
