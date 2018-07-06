require('dotenv').config();
const express= require('express');
const bodyParser = require('body-parser');

const app = express();

//app.use() --> middleware that runs for EVERY request
app.use(bodyParser.json())

// === Endpoints ======

//app.get('/api/users, (req, res) => {})

// === Endpoints ======
let { SERVER_PORT } = process.env;
app.listen( SERVER_PORT, () => {
    console.log(`Listening to port: ${ SERVER_PORT }`)
})