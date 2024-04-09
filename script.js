const display = document.getElementById("display");
const acButton = document.querySelector(".grey-btn");

function appendToDisplay(input) {
  display.value += input;
  acButton.textContent = "C";
}

function clearDisplay() {
  display.value = "";
  acButton.textContent = "AC";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function toggleSign() {
  // Parse the current value of the display to a number
  let currentValue = parseFloat(display.value);

  // If currentValue is a number (not NaN), toggle its sign
  if (!isNaN(currentValue)) {
    display.value = -currentValue;
  }
}

function calculatePercentage() {
  let expression = display.value;

  // Check if the last character of the expression is a number
  let lastChar = expression.slice(-1);
  if (!isNaN(lastChar)) {
    // If the last character is a number, divide it by 100 to get the percentage
    let percentage = parseFloat(expression) / 100;
    display.value = percentage;
  } else {
    // If the last character is not a number, treat it as part of the expression
    display.value += "/100";
    calculate();
  }
}
