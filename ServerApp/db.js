const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'esilxl0nthgloe1y.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user: 'e6vernyqhz5glc54',
    database: 'rf7xurjfj41nl2j2',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    password: 'veqwsfk4xm9hph69'
    //password: 'userDBTMM.Progetto01'
});


module.exports = pool;