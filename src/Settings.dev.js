

 const  cnnString = {
    user: 'jdema',
    password: 'club+123',
    server: '201.234.32.177,7780/SQLEXPRESS2014',
    database: 'sportmanager',
    options: {
        trustedConnection: true,
        encrypt: false ,
        integratedSecurity : false,
    }
}

const cnnstandarString = `Data Source=${cnnString.server};User Id=${cnnString.user};Password=${cnnString.password};Initial Catalog=${cnnString.database};Persist Security Info = True;`


module.exports.cnnString = cnnString;
module.exports.cnnstandarString = cnnstandarString;