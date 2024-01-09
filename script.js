let currentInput = '0';
let operator = null;
let previousInput = null;

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function setOperator(op) {
  if (operator !== null) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '0';
}

function calculate() {
  if (operator === null || previousInput === null) {
    return;
  }
  switch (operator) {
    case '+':
      currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
      break;
    case '-':
      currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
      break;
    case '*':
      currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
      break;
    case '/':
      currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
      break;
    default:
      return;
  }
  operator = null;
  previousInput = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  previousInput = null;
  updateDisplay();
}

// Modal functionality
document.getElementById('openModalBtn').addEventListener('click', function() {
  document.getElementById('calculatorModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
  document.getElementById('calculatorModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('calculatorModal')) {
    document.getElementById('calculatorModal').style.display = 'none';
  }
});
