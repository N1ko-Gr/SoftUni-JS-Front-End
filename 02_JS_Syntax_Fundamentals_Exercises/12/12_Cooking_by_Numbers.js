function solve(number, act1, act2, act3, act4, act5){
    let list =[];
    for (let i = 1; i <= 5; i++) {
        list.push(arguments[i]);
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'chop') {
            number /= 2;
        } else if (list[i] === 'dice') {
            number = Math.sqrt(number);
        } else if (list[i] === 'spice') {
            number += 1;
        } else if (list[i] === 'bake') {
            number *= 3;
        } else if (list[i] === 'fillet') {
            number *= 0.8;
            
        }
        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');