const conn = require('./Connection');
const sql = require('mssql');

const getNA = async (req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request().query('SELECT countryName FROM northAmerica');
    return res.json(result.recordset);
};

const getEU = async (req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request().query('SELECT countryName FROM europe');
    return res.json(result.recordset);
};

const getAS = async (req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request().query('SELECT countryName FROM asia');
    return res.json(result.recordset);
};

const getOC = async (req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request().query('SELECT countryName FROM oceania');
    return res.json(result.recordset);
};

module.exports = {
    getNA: getNA,
    getEU: getEU,
    getAS: getAS,
    getOC: getOC
}