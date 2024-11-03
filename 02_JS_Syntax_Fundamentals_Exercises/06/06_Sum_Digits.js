function solve(num) {
    let result = 0;
    let numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
        result += Number(numString[i]);
    }
    console.log(result);
}

solve(245678);
solve(97561);
solve(543);