// Declare an asynchronous function that will fetch data from an API
const getData = async () => {
    // Make an API call and wait for the response
    const response = await fetch('https://api.example.com/data');
    // Convert the response to JSON format and wait for completion
    const data = await response.json();
    // Send the formatted data back to wherever this function was called
    return data;
}
//In our code 'https://api.example.com/data', the API is like a waiter at a restaurant:

//It's an endpoint (URL) that serves data when we request it
//It defines how two pieces of software can talk to each other
//It provides rules for requesting and receiving data
//An API key, on the other hand, is like a VIP pass:

//It's a unique authentication token
//Used to access protected APIs
//Usually looks like: "ak_123xyz456abc"
//In our getData() function, we're making a request to an API endpoint to fetch some data. We could enhance this by adding an API key if the service requires authentication: