function checkForPalindrome(numbers) {
    const isPalindrome = (num) => {
        const reversedNum = num.toString().split('').reverse().join('');
        return num === parseInt(reversedNum);
    };

    numbers.forEach((num) => console.log(isPalindrome(num)));
}

checkForPalindrome([12321, 5, 321, 444, 111]);
checkForPalindrome([123,323,421,121]);