function solve(count, arr){
    let newArr = [];

    for (let i = 0; i < count; i++) {
        newArr.push(arr[i]);
    }
    newArr.reverse()
    console.log(newArr.join(' '));
}

solve(3, [1, 2, 3, 4, 5]);