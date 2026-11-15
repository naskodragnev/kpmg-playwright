// Declaring stuff.
const serviceHours: number = 30;
let remainingDays: number;
let remainingHours: number;
let remainingMinutes: number;

// Doing calculations.
remainingDays = Math.floor(serviceHours/24);
remainingHours = serviceHours % 24;
remainingMinutes = serviceHours * 60;

// Print stuff.
console.log('Remaining time to complete the task: ' + remainingDays + ' day and ' + remainingHours + ' hours');
console.log('This is a total of: ' + remainingMinutes + ' minutes');

let requestCounter: number = 5;
console.log('Pending requests: ' + requestCounter);

requestCounter += 3;
console.log('Pending requests: ' + requestCounter);

requestCounter -= 2;
console.log('Pending requests: ' + requestCounter);

