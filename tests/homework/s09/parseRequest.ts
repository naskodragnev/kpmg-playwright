const recievedRequests = `
{
  "requests": [
    {
      "ID": "123",
      "Title": "Random Title",
      "Priority": "LOW"
    },
    {
      "ID": "4324",
      "Title": "Random Title 2",
      "Priority": "HIGH"
    },
    {
      "ID": "243234",
      "Title": "Random Title 3",
      "Priority": "LOW"
    },
    {
      "ID": "1233",
      "Title": "Random Title 4",
      "Priority": "MEDIUM"
    },
    {
      "ID": "1444",
      "Title": "Random Title 5",
      "Priority": "LOW"
    },
    {
      "ID": LOW,
      "Title": "Random Title 6",
      "Priority": "HIGH"
    },
    {
      "ID": "42111",
      "Title": "Random Title 7",
      "Priority": "HIGH"
    },
    {
      "ID": "432222",
      "Title": "Random Title 8",
      "Priority": "LOW"
    }
    {
      "ID": "5555",
      "Title": "Random Title 9",
      "Priority": "MEDIUM"
    },
    {
      "ID": "1111111",
      "Title": "Random Title 10",
      "Priority": "HIGH"
    }
  ]
}`

console.log("Preparing to parse the text.")

function parseText(recievedRequest: string) {
    try {
        const data = JSON.parse(recievedRequest);
      
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error(`Syntax error: ${error.message} 
                Call Stack: ${error.stack}
                Cause: ${error.cause}`);
        } else if (error instanceof TypeError){
            console.error(`Type error: ${error.message} 
                Call Stack: ${error.stack}
                Cause: ${error.cause}`);
        } else if (error instanceof ReferenceError){
            console.error(`Reference error: ${error.message} 
                Call Stack: ${error.stack}
                Cause: ${error.cause}`);
        } else {
            throw error;
        }
    } finally {
        console.log('Parsing finished');
    }
}

parseText(recievedRequests);