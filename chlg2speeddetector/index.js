// function to check the speed and determine points or licence suspension
function checkSpeed(speed) {
    const speedLimit = 70; // Speed limit in km/h
    const kmPerPoint = 5;
}
function checkSpeed(speed) {
    // Speed limit in km/h
    const speedLimit = 70; 
     // Each 5 km/h beyond the limit results in one demerit point.
    const kmPerPoint = 5;  
    // Each 5 km/h beyond the limit results in one demerit point.

    // If the speed is within the limit, return 'Ok'
    if (speed <= speedLimit) {
        return 'Ok';
    } else {
        // Calculate the number of demerit points
        const points = Math.floor((speed - speedLimit) / kmPerPoint);

        // If the points exceed 12, the license is suspended
        if (points > 12) {
            return 'License suspended';
        } else {
            // Otherwise, return the number of demerit points
            return `Points: ${points}`;
        }
    }
}

// Function to prompt the user for the car's speed and display the result
function promptForSpeed() {
    // Prompt the user to enter the car's speed
    let speed = prompt("Enter the car's speed in km/h:");
    
    // Convert the input to an integer
    speed = parseInt(speed);

    // Check if the input is a valid number
    if (isNaN(speed) || speed < 0) {
        // Alert the user if the input is not valid
        alert("Please enter a valid speed.");
    } else {
        // Get the result based on the speed
        const result = checkSpeed(speed);
        
        // Display the result to the user
        alert(result);
    }
}

// Call the function to prompt for speed and display the result
promptForSpeed();