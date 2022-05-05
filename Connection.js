const sql = require('mysql');

const dbSettings = {
    host: 'localhost',
    user: 'test',
    password: '123',
    database: 'testDB'
}

async function getConnection(){
    try{
        const pool = await sql.createConnection(dbSettings);
        return pool;
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    getConnection: getConnection
}