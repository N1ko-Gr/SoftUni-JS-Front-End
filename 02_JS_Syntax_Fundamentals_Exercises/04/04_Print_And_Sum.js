function solve(start, end) {
    let totalSum = 0;
    let output = "";
    for (let i = start; i <= end; i++) {
        output += i + " ";
        totalSum += i;
    }
    console.log(output);  
    console.log(`Sum: ${totalSum}`);
}

solve(5, 10); 
solve(0, 26)
solve(50, 60)