const conn = require('./Connection');
const sql = require('mysql');

const getNA = async (req, res) => {
    const pool = await conn.getConnection();
    const sql2 = "SELECT countryName FROM northAmerica";
    pool.query(sql2, function (err, result, fields) {
        return res.json(result);
    });
};

const getEU = async (req, res) => {
    const pool = await conn.getConnection();
    const sql2 = "SELECT countryName FROM europe";
    pool.query(sql2, function (err, result, fields) {
        return res.json(result);
    });
};

const getAS = async (req, res) => {
    const pool = await conn.getConnection();
    const sql2 = "SELECT countryName FROM asia";
    pool.query(sql2, function (err, result, fields) {
        return res.json(result);
    });
};

const getOC = async (req, res) => {
    const pool = await conn.getConnection();
    const sql2 = "SELECT countryName FROM oceania";
    pool.query(sql2, function (err, result, fields) {
        return res.json(result);
    });
};

module.exports = {
    getNA: getNA,
    getEU: getEU,
    getAS: getAS,
    getOC: getOC
}