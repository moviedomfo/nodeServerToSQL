var express = require('express');
const SociosDAC = require('./SociosDAC');
//const SociosDAC = require('./SociosTediousDAC');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const cors = require('cors');
const {cnnString,cnnstandarString} = require('./Settings');
const dotenv = require('dotenv');
dotenv.config();
var app = express();


app.use(logger('dev'));

app.get('/', function (req, res) {
   
    const sql = require("mssql");

    // config for your database
 
    // connect to your database
    sql.connect(cnnstandarString, function (err) {
    
        if (err) console.log(err);

        // create Request object
        const request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Persons', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

app.get('/persons', function (req, res,next) {

    const  sociosDAC = new  SociosDAC();
    sociosDAC.getPersons2()
   .then(function(result){
        res.send(result);
   
  }).catch(err => res.send(err.message));
   
   
});



const PORT = process.env.APP_PORT || 3000;

//lo puse en el puerto 8000 para los test
app.listen(PORT, () => {
  console.log('Hoola Juan Dema Server y me la como on port '+ PORT)
})

module.exports = app;