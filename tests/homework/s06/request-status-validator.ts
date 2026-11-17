/*
Write a request status validator: given the current and the next status, print whether the transition is allowed
(Submitted → In Review → Resolved; In Review → Waiting for Info → In Review)
*/

let currentStatus = "Waiting for Info";

if (currentStatus === "Submitted"){
    console.log("Transition to status 'In Review' is allowed")
} else if (currentStatus === "In Review"){
    console.log("Transition to status 'Resolved' or 'Waiting for Info' is allowed")
} else if (currentStatus === "Waiting for Info"){
    console.log("Transition to 'In Review' is allowed")
} else if (currentStatus === "Resolved"){
    console.log("Issue was Resolved");
} else {
    console.log("Wrong status!");
}


