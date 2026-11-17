 // Print a text table of requests: id, title padded to 25 characters, priority, status

const requests = [
    { Id: 1, Title: "Titile one", Priority: 1, Status: "Submitted" },
    { Id: 2, Title: "Titile two", Priority: 3, Status: "In Review" },
    { Id: 3, Title: "Titile three", Priority: 2, Status: "Resolved" }
];

console.table(requests);