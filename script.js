// Declare variables of different data types
let myString = "Hello, world!";
let myNumber = 42;
let myBoolean = true;

// Function to add two numbers
function add(a, b) {
    let result = a + b;
    console.log("Add:", result);
    return result;
}

// Function to subtract two numbers
function subtract(a, b) {
    let result = a - b;
    console.log("Subtract:", result);
    return result;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Divide: Error! Division by zero.");
        return "Error! Division by zero.";
    }
    let result = a / b;
    console.log("Divide:", result);
    return result;
}

// Function to multiply two numbers
function multiply(a, b) {
    let result = a * b;
    console.log("Multiply:", result);
    return result;
}

// Function to update the result div
function updateResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.classList.remove("hidden");
}

// Function to clear inputs and result
function clearInputs() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";
    resultDiv.classList.add("hidden");
}

// Event listeners for buttons
document.getElementById("addBtn").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = add(num1, num2);
    updateResult(result);
});

document.getElementById("subtractBtn").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = subtract(num1, num2);
    updateResult(result);
});

document.getElementById("divideBtn").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = divide(num1, num2);
    updateResult(result);
});

document.getElementById("multiplyBtn").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = multiply(num1, num2);
    updateResult(result);
});

document.getElementById("clearBtn").addEventListener("click", clearInputs);

// Debug output of the declared variables
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
