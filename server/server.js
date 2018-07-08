require('dotenv').config();
const axios= require('axios')
const express= require('express');
const bodyParser = require('body-parser');
const listCtrl = require('./controllers/list_controllers.js')
const app = express();

//app.use() --> middleware that runs for EVERY request
app.use(bodyParser.json())

// === Endpoints ======

app.get('/search/:userInput', listCtrl.getGames)
app.get('/api/savedLists', listCtrl.getList)
app.post('/api/savedLists', listCtrl.create)
app.delete('/api/savedLists/:id', listCtrl.delete)


// === Endpoints ======
let { SERVER_PORT } = process.env;
app.listen( SERVER_PORT, () => {
    console.log(`Listening to port: ${ SERVER_PORT }`)
})