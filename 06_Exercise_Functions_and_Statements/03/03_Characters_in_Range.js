function charsInRange(start, end) {
    let result = [];
    let startCode = Math.min(start.charCodeAt(0), end.charCodeAt(0)) + 1;
    let endCode = Math.max(start.charCodeAt(0), end.charCodeAt(0)) - 1;
    for (let i = startCode ; i <= endCode ; i++) {
        result.push(String.fromCharCode(i));
    }

    return result.join(' ').trim();
}


console.log(charsInRange('a', 'd'));
console.log(charsInRange('#', ':'));
console.log(charsInRange('C', '#'));
