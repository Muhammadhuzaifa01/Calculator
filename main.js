
let resultDisplay = document.getElementById('result');
let calculation = '';

function appendCharacter(char) {
  calculation += char;
  resultDisplay.value = calculation;
}

function clearDisplay() {
  calculation = '';
  resultDisplay.value = '';
}

function deleteLast() {
  calculation = calculation.slice(0, -1);
  resultDisplay.value = calculation;
}

function calculateResult() {
  try {
    const result = eval(calculation);
    resultDisplay.value = result;
    calculation = String(result);
  } catch (error) {
    resultDisplay.value = 'Error';
  }
}

function handleKeyboardInput(event) {
  const key = event.key;
  const validKeys = /[0-9./*+\-C=]|Backspace|Delete/;

  if (!validKeys.test(key)) return;

  if (key === 'C') {
    clearDisplay();
  } else if (key === 'Backspace' || key === 'Delete') {
    deleteLast();
  } else if (key === '=') {
    calculateResult();
  } else {
    appendCharacter(key);
  }
}

// Listen for keyboard events
document.addEventListener('keydown', handleKeyboardInput);

