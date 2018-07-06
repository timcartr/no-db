const express= require('express');
const bodyParser = require('body-parser');

const app = express();

//app.use() --> middleware that runs for EVERY request
app.use(bodyParser.json())

// === Endpoints ======

//app.get('/api/users, (req, res) => {})

// === Endpoints ======
const PORT = 3005;
app.listen( PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})