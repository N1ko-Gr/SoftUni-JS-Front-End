function solve(array, step) {
    let newArray = [array[0]];

    for (let i = step; i <= array.length; i += step) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(solve(['5', '20', '31', '4', '20'], 2))
solve(['dsa','asd', 'test', 'tset'], 2)