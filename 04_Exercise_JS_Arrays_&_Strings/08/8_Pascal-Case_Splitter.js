function splitPascalCase(text) {
    
    const words = text.match(/[A-Z][a-z]*/g);

    const result = words.join(', ');

    console.log(result);
}