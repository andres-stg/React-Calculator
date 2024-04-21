import './App.css';

function calculateExpression(expression) {
  const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
  };

  let [operand1, operand2] = expression.split(' ');

  operand1 = parseFloat(operand1);
  operand2 = parseFloat(operand2);

  return operators;
}

function calculate() {
  let entry = document.getElementsByName('entry')[0];
  try {
      entry.value = calculateExpression(entry.value);
  } catch {
      entry.value = "Error";
  }
}

function appendValue(value) {
  let entry = document.getElementsByName('entry')[0];
  entry.value += value;
}

function clearEntry() {
  let entry = document.getElementsByName('entry')[0];
  entry.value = '';
}