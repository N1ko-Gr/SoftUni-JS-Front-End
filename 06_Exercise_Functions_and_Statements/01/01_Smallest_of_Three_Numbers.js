function smallestNumber(num1, num2, num3) {
    const result = Math.min(...arguments);
    console.log(result);
}

smallestNumber(2, 5, 3);
smallestNumber(600, 324, 123);
smallestNumber(25, 21, 4);
smallestNumber(2,2,2);