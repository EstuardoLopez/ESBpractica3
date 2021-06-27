const express = require('express');
var config = require('./config/config');
var esbService = require('./Routes/esb');
//var requestBook = require('./Routes/RequestBook');


const hostname = config.root.host;
const port = config.root.puerto;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use('/esb', esbService);
//app.use('/solicitud', requestBook);

app.listen(port,function(){
  console.log(`Server running at ${hostname}:${port}/`);
});