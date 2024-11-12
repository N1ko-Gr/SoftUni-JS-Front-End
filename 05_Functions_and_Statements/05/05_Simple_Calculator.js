function simpleCalculator(num1, num2, operator) {
    const clalculator = [];
    clalculator['add'] = (a, b) => a + b;
    clalculator['subtract'] = (a, b) => a - b;
    clalculator['multiply'] = (a, b) => a * b;
    clalculator['divide'] = (a, b) => a / b;

    console.log(clalculator[operator](num1, num2));
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8 , 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');