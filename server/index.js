const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config()

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));


const app = express();



app.get('/api/inventory',controller.getInventory)
























const port = 5000;

app.listen(port, ()=> console.log("listening on port " + port));