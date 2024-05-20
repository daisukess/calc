const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const operators = ['%', '/', '*', '-', '+'];
let output = '';

const calculate = (value) => {
    if (value === '=' && output !== '') {
        try {
            output = eval(output.replaceAll('%', '/100')).toString();
        } catch {
            output = 'Error';
        }
    } else if (value === 'C') {
        output = '';
    } else if (value === 'DEL') {
        output = output.slice(0, -1);
    } else if (value === '±') {
        if (output && !operators.includes(output.slice(-1))) {
            output = (output[0] === '-' ? output.slice(1) : '-' + output);
        }
    } else if (value === '.') {
        if (!output.includes('.')) {
            output += value;
        }
    } else {
        if (operators.includes(value) && (output === '' || operators.includes(output.slice(-1)))) {
            return;
        }
        output += value;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.value));
});
