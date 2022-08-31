const dotenv = require('dotenv');
dotenv.config();
 const  cnnString = {
    user: process.env.DB_USERNAME,
    
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        trustedConnection: true,
        encrypt: false ,
        integratedSecurity : false,
    }
}


const cnnstandarString = `Data Source=${cnnString.server};
User Id=${cnnString.user};Password=${cnnString.password};Initial Catalog=${cnnString.database};Persist Security Info = True;`


module.exports.cnnString = cnnString;
module.exports.cnnstandarString = cnnstandarString;