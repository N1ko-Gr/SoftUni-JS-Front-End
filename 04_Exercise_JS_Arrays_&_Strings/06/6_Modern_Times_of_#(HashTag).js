function solve(sentance) {
    const words = sentance.split(' ');
    for (let word of words) {
        if (word.includes('#') && word.substring(1).length > 0 ) {
            const cleanWord = word.substring(1);
            if (/^[a-zA-Z]+$/.test(cleanWord)) {
                console.log(cleanWord);
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')