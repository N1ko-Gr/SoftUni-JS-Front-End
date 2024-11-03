function solve(fruit, weightInGrams, pricePerKilogram) {
    const weightInKilograms = weightInGrams / 1000;
    const totalPrice = weightInKilograms * pricePerKilogram;

    let result = `I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`;
    console.log(result)
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);