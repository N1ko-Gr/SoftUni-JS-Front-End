function solve(speed, area) {
    const limits = {
        motorway: 130,
        city: 50,
        interstate: 90,
        residential: 20
    };

    const speedLimit = limits[area];

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        const overSpeed = speed - speedLimit;
        let status;

        if (overSpeed <= 20) {
            status = "speeding";
        } else if (overSpeed <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}


solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');