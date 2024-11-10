function solve(array, rotation) {
    let rotatedArray = []
    rotation = rotation % array.length;

    rotatedArray = array.slice(rotation).concat(array.slice(0, rotation));
    console.log(rotatedArray.join(' '));
        
}


solve([51, 47, 32, 61, 21], 2);