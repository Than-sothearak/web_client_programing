function runCalculator() {
  // Step 1: Get input from user
  let num1 = Number(prompt("Enter first number:"));
  let operator = prompt("Enter operator (+, -, *, /):");
  let num2 = Number(prompt("Enter second number:"));

  let result;

  // Step 2: Check operator and calculate
  if (operator === "+") {
    result = num1 + num2;

  } else if (operator === "-") {
    result = num1 - num2;

  } else if (operator === "*") {
    result = num1 * num2;

  } else if (operator === "/") {

    // Bonus: handle divide by zero
    if (num2 === 0) {
      alert("Error: Cannot divide by zero!");
      return;
    }

    result = num1 / num2;

  } else {
    alert("Invalid operator!");
    return;
  }

  // Step 3: Show result
  alert("Result: " + result);
}

// Call function (optional auto-run)
// runCalculator();