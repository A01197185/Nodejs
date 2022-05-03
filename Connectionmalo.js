// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');
// Consulta SQL.
var q1 = 'SELECT * FROM northAmerica';
var q2 = 'SELECT * FROM europe';
var q3 = 'SELECT * FROM asia';
var q4 = 'SELECT * FROM oceania';

//namespace
dbData = {
  bNA: [],
  bEU: [],
  bAS: [],
  bOC: [],
};


// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "123",
  database : 'testDB'
});

// Funcion que nos permite comprobar la conexión a la base de datos.
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// Funcion que nos devolverá resultados de la base de datos.
con.connect(function(err) {
  if (err) throw err;
  con.query(q1, function (err, bucl1) {
    if (err) throw err;
    // Bucle que recore los resultados y pinta en consola.
    for(i=0; i<bucl1.length; i++){
    	console.log("country: " + bucl1[i].countryName);
      dbData.bNA[i] = bucl1[i].countryName;
    }
    });
  con.query(q2, function (err, bucl2) {
    if (err) throw err;
    // Bucle que recore los resultados y pinta en consola.
    for(i=0; i<bucl2.length; i++){
    	console.log("country: " + bucl2[i].countryName);
      dbData.bEU[i] = bucl2[i].countryName;
    }
  });
  con.query(q3, function (err, bucl3) {
    if (err) throw err;
    // Bucle que recore los resultados y pinta en consola.
    for(i=0; i<bucl3.length; i++){
    	console.log("country: " + bucl3[i].countryName);
      dbData.bAS[i] = bucl3[i].countryName;
    }
  });
  con.query(q4, function (err, bucl4) {
    if (err) throw err;
    // Bucle que recore los resultados y pinta en consola.
    for(i=0; i<bucl4.length; i++){
    	console.log("country: " + bucl4[i].countryName);
      dbData.bOC[i] = bucl4[i].countryName;
    }
    console.log(dbData.bOC[1]);
  });
});

module.exports = {
  dbData: dbData
}