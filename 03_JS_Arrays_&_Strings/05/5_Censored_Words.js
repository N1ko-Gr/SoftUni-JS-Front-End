function solve(text, word) {
    const censor = '*'.repeat(word.length);

    const censored = text.split(word).join(censor);

    console.log(censored);

}

solve("The quick brown fox jumps over the lazy dog", "dog");