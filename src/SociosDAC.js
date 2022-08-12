const Promise = require('promise');
const sql = require('mssql/msnodesqlv8');
//const sql = require('msnodesqlv8');
const {cnnString,cnnstandarString} = require('./Settings');

  class SociosDAC {



//Ejecuta un query string
 getPersons = ()=> {
    console.log(cnnString );
        return new Promise(function (resolve, reject) {

            const cnn = new sql.Connection(cnnString);
            const req = new sql.Request(cnn);
            req.multiple = true;

            cnn.connect().then(function () {

                req.query('select * from dbo.Persons').then(function (recordset) {

                    resolve(recordset);
                }).catch(err => {
                    reject(new Error('Error en dac' + err.message));
                });

            }).catch(function (err) {
                reject(new Error('Error en dac-cnn' + err.message));
            });
        });
    }

    getPersons2 = ()=> {
        

        console.log(cnnstandarString );
        return new Promise(function (resolve, reject) {
            sql.connect(cnnstandarString).then(function () {
                // Query 
                new sql.Request()                 
                    .execute('dbo.person_s').then(function (recordsets) {
                        resolve(recordsets);
                    }).catch(function (err) {
                        reject(new Error('Error en dac ' + err.message));
                    });


            }).catch(function (err) {
                reject(new Error('Error en dac-cnn ' + err.message));
            });
        });
        }

    // Stored Procedure 
    getSociosByParams(id, nombre) {

        return new Promise(function (resolve, reject) {
            sql.connect(cnnString).then(function () {
                // Query 
                new sql.Request()
                    .input('NroSocio', sql.Int, id)
                    .input('NAME', sql.VarChar(10), nombre)
                    .execute('socios_g_params').then(function (recordsets) {
                        resolve(recordsets);
                    }).catch(function (err) {
                        reject(new Error('Error en dac ' + err.message));
                    });


            }).catch(function (err) {
                reject(new Error('Error en dac-cnn ' + err.message));
            });
        });
    }

    
}

module.exports = SociosDAC;