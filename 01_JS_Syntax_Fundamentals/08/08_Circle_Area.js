function solve(number){
    let result;
    if (typeof number !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof number}.`);
        return;
    }
    else{
        result = Math.PI * Math.pow(number, 2);
        console.log(result.toFixed(2));
    }
}

solve(5);
solve('five');