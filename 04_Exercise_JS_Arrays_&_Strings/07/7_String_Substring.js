function solve(word, sentence) {
    // Convert the target word to lowercase for case-insensitive comparison
    const targetWord = word.toLowerCase();
    
    // Split the sentence into words
    const words = sentence.split(' ').map(w => w.toLowerCase());

    // Check if the target word is in the list of words
    if (words.includes(targetWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript', 'JavaScript is a popular programming language');
solve('python', 'JavaScript is a popular programming language');