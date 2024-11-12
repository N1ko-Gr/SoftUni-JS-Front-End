function printMatrix(number) {
    const matrix = [];

    for (let i = 1; i <= number; i++) {
        const row = [];

        for (let j = 1; j <= number; j++) {
            row.push(number);
        }

        matrix.push(row);
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}


printMatrix(3);