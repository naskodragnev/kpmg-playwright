import { idFormatting } from './request-utils';
import { slaCalculation } from './request-utils';
import { overdueCheck } from './request-utils';
import { validateTitle } from './request-utils';
import { validateCategory } from './request-utils';
import { summaryText } from './request-utils';


type RequestImput = [number, string, number, number, string, string, string];
const recievedRequestOne: RequestImput = [123, 'Medium', 10, 11, 'Test title', 'Lighting', 'Test summary'];
const recievedRequestTwo: RequestImput = [321, 'High', 13, 1, 'Test title 2', 'Lighting 2', 'Test summary 2'];


const setId = idFormatting(recievedRequestOne[0]);
const setSeverity = slaCalculation(recievedRequestOne[1]);
const setHoursSpent = overdueCheck(recievedRequestOne[2], recievedRequestOne[3])
const setTitle = validateTitle(recievedRequestOne[4]);
const setCategory = validateCategory(recievedRequestOne[5]);
const setSummary = summaryText(recievedRequestOne[6]);

console.table([{ Id: setId, 'Hours commited': setSeverity, 'Task progress': setHoursSpent, 'Title': setTitle, 'Category': setCategory, 'Summary': setSummary }]);



