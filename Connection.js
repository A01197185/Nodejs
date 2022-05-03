const sql = require('mssql');

const dbSettings = {
    user: 'test',
    password: '123',
    server: 'localhost',
    database: 'testDB',
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
}

async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    getConnection: getConnection
}