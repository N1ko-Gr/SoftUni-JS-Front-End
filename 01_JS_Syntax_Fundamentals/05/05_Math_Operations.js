function solve(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log('Error: Division by zero');
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            if (num2 === 0) {
                console.log('Error: Division by zero');
                return;
            }
            result = num1 % num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '**':
            result = Math.pow(num1, num2);
            break;
        
        default:
            console.log('Error: Invalid operator');
            return;
        }
        console.log(result);
}

solve(5, 6, '+');
solve(3, 5.5, '*');
