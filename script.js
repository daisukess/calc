const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number, .operator, .clear, .delete, .equal');
const operators = ['%', '÷','×', '-', '+'];
let output = '';

const calculate = (value) => {
    if (value === '=' && output !== '') {
        output = eval(output.replaceAll('%', '/100').replaceAll('×', '*').replaceAll('÷', '/')).toString();
    } else if (value === 'C') {
        output = '';
        console.log('clear');
    } else if (value === 'DEL'){
        output = output.toString().slice(0, -1);
    } else if (value === 'pm') {
        if (operators.includes(output.slice(-1))) {
            return;
        }else {
            output = output.slice(0, -1) + '(-' + output.slice(-1) + ')';
        } 
    }else if (value === '.') {
        if (operators.includes(output.slice(-1)) || output.includes('.')) {
            return;
        }else {
            output += value;
        }   
    }else {
        if (output === '' && operators.includes(value)) {
            return;
        } else if (operators.includes(output.slice(-1)) && operators.includes(value)) {
            output = output.slice(0, -1) + value;
        } else {
            output += value;
        }
    }
    display.value = output;
    console.log(output);
};

const test = (value) => {
    console.log(value);
};


buttons.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.value));
});