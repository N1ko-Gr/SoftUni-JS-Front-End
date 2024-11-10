function sortingNumbers(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Create an empty array to store the result
    const result = [];
    
    // Use a loop to alternate between the smallest and largest elements
    while (arr.length > 0) {
        // Remove and add the smallest element from the start of the array
        result.push(arr.shift());
        
        // Check if there are elements left, then remove and add the largest element from the end
        if (arr.length > 0) {
            result.push(arr.pop());
        }
    }
    
    return result;
}

// Example usage
const inputArray = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
const outputArray = sortingNumbers(inputArray);
console.log(outputArray);