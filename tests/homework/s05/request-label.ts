// Not sure if i understood this task correctly but here it goes:
// Declare stuff.
const requestId: string = 'REQ-1042';
const priority: string = '[P2]';
const category: string = 'Lighting';
const subCategory: string = 'Broken street light';
const requestLabelItems = [requestId, priority, category, subCategory];
// Print stuff in console.
console.table([{ id: 1, 'Request ID': requestId, 'Priority': priority, 'Category': category, 'Sub Category': subCategory }]);
// Show stuffs lenght.
console.log('Number of items in the table: ' + requestLabelItems.length);
// Could not figure out how to show items lenght from the printed in the console table(always showed 1 - the number of rows i guess), so i created a array of the items to count them.