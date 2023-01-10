const mysql = require('mysql')
const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3306,
    password: "",
    database: "girlshostel",
})
connection.connect((err) => {
    console.log((err) ? err.sqlMessage : "Database Connection Established");
})

module.exports = connection