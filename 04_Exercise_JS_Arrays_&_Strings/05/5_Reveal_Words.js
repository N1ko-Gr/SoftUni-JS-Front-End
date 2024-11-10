function solve(word, sentance){
    const wordArray = word.split(', ');

    for (let word of wordArray) {
        const template = '*'.repeat(word.length);
        sentance = sentance.replace(template, word);
    }
    console.log(sentance);

}

solve('great','softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')