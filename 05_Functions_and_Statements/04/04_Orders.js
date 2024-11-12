function orders(item, quantity) {
    
    const drinks = []

    drinks['coffee'] = (q) => q * 1.50;
    drinks['water'] = (q) => q * 1.00;
    drinks['coke'] = (q) => q * 1.40;
    drinks['snacks'] = (q) => q * 2.00;

    console.log(drinks[item](quantity).toFixed(2))
}

orders('water', 5);
orders('coffee', 2);