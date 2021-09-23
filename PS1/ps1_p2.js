const expression = '8%3';
let operator = expression => {
    if (expression.includes('+')){
        expression = expression.split('+');
        return parseInt(expression[0]) + parseInt(expression[1]);
    }
    else if (expression.includes('-')){
        expression = expression.split('-');
        return parseInt(expression[0]) - parseInt(expression[1]);
    }
   else if (expression.includes('*')){
        expression = expression.split('*');
        return parseInt(expression[0]) * parseInt(expression[1]);
    }
    else if (expression.includes('/')){
        expression = expression.split('/');
        return parseInt(expression[0]) / parseInt(expression[1]);
    }
    else if (expression.includes('^')){
        expression = expression.split('^');
        return parseInt(expression[0]) ** parseInt(expression[1]);
    }
    else if (expression.includes('%')){
        expression = expression.split('%');
        return parseInt(expression[0]) % parseInt(expression[1]);
    }
}

//console.log(operator('19 + 7'));
//console.log(operator('19 - 7'));
//console.log(operator('19 * 7'));
//console.log(operator('19 / 7'));
//console.log(operator('19 ^ 7'));
//console.log(operator('19 % 7'));
console.log(`${expression} = ${operator(expression)}`);