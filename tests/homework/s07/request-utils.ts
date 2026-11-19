/*
6 small, pure, typed functions
- id formatting
- sla calculation
- overdue check
- title validation (5-100 characters)
- category check against an allowed list
- summary text
*/

// ID formatting
export function idFormatting (id: number, prefix = 'ID'): string {
    const base = `${prefix}-${id}`;
    return base;
}

//const idRequest = idFormatting(121314);
//console.log(idRequest); // Test

// SLA calculation
export function slaCalculation(severity: string): number {
  if (severity === 'High') {
    return 4;
  } else if (severity === 'Medium'){
    return 24;
  } else if (severity === 'Low'){
    return 72;
  } else
    return 0;
}

//const assignServiceHours = slaCalculation('Medium');
//console.log(assignServiceHours + " hours");

// Overdue check
export function overdueCheck(assignedHours: number, hoursPassed: number): string{
    if(assignedHours !== hoursPassed && assignedHours < hoursPassed){ // assigned hours and hours passed can be equal, so it wont be overdue
        return "Task is overdue!";
    }
    return "Task is currently ongoing!";
} 

//const hoursCheck = overdueCheck(24, 27);
//console.log(hoursCheck);


// Title validation
export function validateTitle(assignedTitle: string): string{
    if(assignedTitle.length > 5 && (assignedTitle.length - 1) <= 100){
        return assignedTitle;
    }
    return "Incorrect title lenght!";
}

//const checkTitle = validateTitle('This is a test title');
//console.log(checkTitle);


// Category check against an allowed list
export function validateCategory(assignedCategory: string): string{
    if(assignedCategory === 'Lighting' || assignedCategory === 'Infrastructure' ){
        return `Category: ${assignedCategory}`;
    }
    return "Invalid category";
}

//const checkCategory = validateCategory('Infrastructure');
//console.log(checkCategory);

// Summary text
export function summaryText(getSummary: string): string{
    if (getSummary !== null || undefined){
        return getSummary;
    }
    return "No summary given.";
}

//const checkSummary = summaryText('This is a test');
//console.log(checkSummary);

