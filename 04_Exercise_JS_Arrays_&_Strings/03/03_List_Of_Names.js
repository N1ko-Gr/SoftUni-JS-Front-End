function sortArray(arr) {
    arr.sort();

    arr.forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
}

sortArray([5, 2, 9, 1, 8]);