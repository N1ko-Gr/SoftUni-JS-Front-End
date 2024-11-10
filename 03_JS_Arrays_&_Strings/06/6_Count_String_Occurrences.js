function solve(sentance, searchWord) {
    let words = sentance.split(' ');
    let count = 0;
    for (let word of words) {
        if (word.toLowerCase() === searchWord.toLowerCase()) {
            count++;
        }
    }
    console.log(count);
}

solve('The quick brown fox jumps over the lazy dog', 'dog'); // Output: 1