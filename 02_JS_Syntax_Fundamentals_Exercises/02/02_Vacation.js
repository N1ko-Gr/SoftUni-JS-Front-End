function solve(groupOfPeople, typeOfGroup, dayOfWeek) {
    let price;

    if (typeOfGroup === "Students") {
        if (dayOfWeek === "Friday") {
            price = 8.45;
        } else if (dayOfWeek === "Saturday") {
            price = 9.80;
        } else if (dayOfWeek === "Sunday") {
            price = 10.46;
        }
        let totalPrice = price * groupOfPeople;
        if (groupOfPeople >= 30){
            totalPrice *= 0.85; 
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
        }
    else if (typeOfGroup === "Business") {
        if (dayOfWeek === "Friday") {
            price = 10.90;
        } else if (dayOfWeek === "Saturday") {
            price = 15.60;
        } else if (dayOfWeek === "Sunday") {
            price = 16;
        }
        let totalPrice = price * groupOfPeople;
        if (groupOfPeople >= 100){
            totalPrice -= price * 10; 
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
        }
    else if (typeOfGroup === "Regular") {
        if (dayOfWeek === "Friday") {
            price = 15;
        } else if (dayOfWeek === "Saturday") {
            price = 20;
        } else if (dayOfWeek === "Sunday") {
            price = 22.50;
        }
        let totalPrice = price * groupOfPeople;
        if (groupOfPeople >= 10 && groupOfPeople <= 20){
            totalPrice *= 0.95; 
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
        }
    
    }

    solve(30, "Students", "Sunday");
    solve(40, "Regular", "Saturday");