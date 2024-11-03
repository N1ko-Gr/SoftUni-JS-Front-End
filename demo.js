let a = 5;
let b = 10;

console.log( a,b );

if (a == b) {
    console.log('a and b are equal');
} else if ( a > b ) {
    console.log('a is greater than b');
} else { 
    console.log('b is greater than a');
}

function solve(a, b) {
    console.log(a + b);
}
solve(a, b);

function gradeText(name, grade){
    console.log(`${name} has a grade of ${grade.toFixed(2)}`);
}

gradeText('John Doe', 95.44444);