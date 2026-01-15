const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.innerText === '0') {
        display.innerText = input;
    } else {
        display.innerText += input;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function backspace() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') display.innerText = '0';
}

function calculate() {
    try {
        // eval resolve a string matemática
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Erro";
        setTimeout(clearDisplay, 1500);
    }
}
