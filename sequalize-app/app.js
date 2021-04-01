
const express = require('express');
const app = express();


// GET

app.get('/', (res,req) => {
 res.send('Hello world!');
})


// LISTEN

app.listen(4231, () => {
    console.log('Server running at port localhost:4231 ')
})