/*
Status code 401 - Unauthorized
-Logged in the City Services application
-Inspected the page -> went to Application tab -> Local storage
-Deleted accessToken and its value
-Clicked on a tab ex. Resolved Cases
-Got 401 Unauthorized error in request

Status code 404 - Not Found
-Logged in the City Services application
-Inspected the page -> Network tab and took the active api call that pops up periodically
-Switched to the console and used fetch to get the same api call but with different values
ex. fetch('http://localhost:3001/api/v1/testing-flags/activeeeeeeeeeeeeee')

Status code 5xx - could not figure it out. Tried to block specific URL like "Resolved Cases" but it did not work.
*/