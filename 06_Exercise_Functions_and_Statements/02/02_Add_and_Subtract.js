function addAndSubtract(num1, num2, num3) {
    const sum = (x, y) => x + y;
    const difference = (x, y) => x - y;

    return difference(sum(num1, num2), num3);

}

console.log(addAndSubtract(5, 3, 2));
console.log(addAndSubtract(10, 7, 3)); 
console.log(addAndSubtract(0, 0, 0)); 