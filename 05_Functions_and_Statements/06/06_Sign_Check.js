function signCheck(num1, num2, num3) {

    const isNegative = [...arguments].filter(num => num < 0).length % 2 !==0;

    console.log(isNegative ? 'Negative' : 'Positive');
}

signCheck(5, 12, -15);
signCheck(-1, -2, 3);