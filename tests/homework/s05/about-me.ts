// Declare stuff for different tables.
const firstName = 'Atanas';
const lastName= 'Dtagnev';
const team = 'KPMG';
let yearsInCompany: number = 5; // I use let in case this is used in an year or more.
const likesCoffee: boolean = true; // i will never not like coffee come on...

// Print stuff we declared in separate tables.
console.table([{ id: 1, 'First Name': firstName,}]);
console.table([{ id: 2, 'Last Name':lastName,}]);
console.table([{ id: 3, 'Team': team,}]);
console.table([{ id: 4, 'Years in the company': yearsInCompany,}]);
console.table([{ id: 5, 'Likes Coffee?': likesCoffee,}]);