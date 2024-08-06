// Create variable declarations using both let and const
const n1 = 10; // Number literal
const n2 = 15; // Number literal
const n3 = 20; // Number literal
const n4 = 5;  // Number literal

// Check one: add up to 50
// This is a fairly simple operation using arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient ways of handling it with other data structures that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable for convenience.
// Note how we negate isOver25 using the ! operator. We could also have tested for "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Perform string concatenations
let resultMessage = "The four numbers are valid according to the provided criteria: " + isValid + ".";

// Implement escape sequences in strings for special characters
let specialMessage = "Validation complete!\nPlease review the results.";

// Use template literals for string interpolation and multi-line strings
let detailedMessage = `Validation Results:
- Sum equals 50: ${isSum50}
- At least two odd numbers: ${isTwoOdd}
- No number larger than 25: ${!isOver25}
- All numbers unique: ${isUnique}`;

// Output to console
console.log(isValid);
console.log(resultMessage);
console.log(specialMessage);
console.log(detailedMessage);

// Function to validate numbers based on provided criteria
/**
 * Validates an array of numbers based on several criteria.
 * @param {number[]} numbers - The array of numbers to be validated
 * @returns {boolean} - Returns true if all criteria are met, otherwise false
 */
function validateNumbers(numbers) {
    const [n1, n2, n3, n4] = numbers;
    
    // Check one: add up to 50
    const isSum50 = (n1 + n2 + n3 + n4) == 50;
    
    // Check two: at least two odd numbers
    const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
    
    // Check three: no number larger than 25
    const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
    
    // Check four: all unique numbers
    const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
    
    // Combine all checks
    return isSum50 && isTwoOdd && !isOver25 && isUnique;
}

// Example usage of the validateNumbers function
const numbers = [10, 15, 20, 5];
const isValidExample = validateNumbers(numbers);
console.log(`Example validation result: ${isValidExample}`);

// Here's another example of how this COULD be done, but it SHOULD NOT be done this way.
// As programmers, we break things into small, manageable pieces so that they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Constants
const tripDistance = 1500; // Distance of the trip in miles
const fuelBudget = 175; // Fuel budget in dollars
const fuelCostPerGallon = 3; // Average cost of fuel per gallon in dollars

// Car's fuel efficiency in miles per gallon at different speeds
const fuelEfficiency = {
  55: 30,
  60: 28,
  75: 23
};

// Function to calculate fuel needed for the trip
/**
 * Calculates the fuel needed for the trip
 * @param {number} speed - The speed in miles per hour
 * @returns {number} - Gallons of fuel needed
 */
function calculateFuelNeeded(speed) {
  return tripDistance / fuelEfficiency[speed];
}

// Function to calculate fuel cost
/**
 * Calculates the fuel cost for the trip
 * @param {number} fuelNeeded - Gallons of fuel needed
 * @returns {number} - Fuel cost in dollars
 */
function calculateFuelCost(fuelNeeded) {
  return fuelNeeded * fuelCostPerGallon;
}

// Function to calculate trip duration
/**
 * Calculates the trip duration
 * @param {number} speed - The speed in miles per hour
 * @returns {number} - Trip duration in hours
 */
function calculateTripDuration(speed) {
  return tripDistance / speed;
}

// Function to check if budget is sufficient
/**
 * Checks if the fuel budget is sufficient
 * @param {number} fuelCost - The fuel cost in dollars
 * @returns {boolean} - True if the budget is sufficient, otherwise false
 */
function isBudgetSufficient(fuelCost) {
  return fuelCost <= fuelBudget;
}

// Perform calculations for each speed
[55, 60, 75].forEach(speed => {
  const fuelNeeded = calculateFuelNeeded(speed);
  const fuelCost = calculateFuelCost(fuelNeeded);
  const tripDuration = calculateTripDuration(speed);
  const budgetSufficient = isBudgetSufficient(fuelCost);

  // Log the results using template literals
  console.log(`At ${speed} miles per hour:
  - Fuel needed: ${fuelNeeded.toFixed(2)} gallons
  - Fuel cost: $${fuelCost.toFixed(2)}
  - Trip duration: ${tripDuration.toFixed(2)} hours
  - Budget sufficient: ${budgetSufficient ? 'Yes' : 'No'}`);
});

// Compare results to determine the most sensible speed
/**
 * Determines the best speed for the trip based on fuel efficiency and budget
 * @returns {number} - The best speed in miles per hour
 */
function determineBestSpeed() {
  let bestSpeed = 55;
  let bestFuelCost = calculateFuelCost(calculateFuelNeeded(55));
  
  [60, 75].forEach(speed => {
    const currentFuelCost = calculateFuelCost(calculateFuelNeeded(speed));
    if (currentFuelCost < bestFuelCost) {
      bestSpeed = speed;
      bestFuelCost = currentFuelCost;
    }
  });

  return bestSpeed;
}

const bestSpeed = determineBestSpeed();
console.log(`The most sensible speed for the trip is ${bestSpeed} miles per hour.`);
