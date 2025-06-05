const display = document.getElementById('display');

  function append(value) {
    if (display.innerText === '0' && value !== '.') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }

  function clearDisplay() {
    display.innerText = '0';
  }

  function backspace() {
    display.innerText = display.innerText.slice(0, -1) || '0';
  }

  function calculate() {
    try {
      const result = eval(display.innerText.replace('%', '/100'));
      display.innerText = result;
    } catch {
      display.innerText = 'Error';
    }
  }

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
      append(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });