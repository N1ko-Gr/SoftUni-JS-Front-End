function solve(number){
    let result = 0;
    let isNumberAllTheSame = true;
    let numString = number.toString();
    for (let i = 0; i < numString.length; i++) {
        result += Number(numString[i]);
        if (numString[i]!== numString[0]) {
            isNumberAllTheSame = false;
        }
    
    }

    console.log(isNumberAllTheSame)
    console.log(result);
}

solve(2222222);
solve(1234);