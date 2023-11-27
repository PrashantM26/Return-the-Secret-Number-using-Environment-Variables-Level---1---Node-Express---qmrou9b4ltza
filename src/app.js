const express = require('express');
const app = express();
app.use(express.json());

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   //Write your code here
    try {
        const secretNumber = process.env.NUMBER;
    
        if (secretNumber === undefined) {
          res.status(404).json({ err: 'Not Found' });
        } else {
          res.status(200).json({ number: secretNumber });
        }
    } 
    catch (error) {
        res.status(404).json({ err: 'Not Found' });
    }
});

module.exports = app;
