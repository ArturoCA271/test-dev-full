const mysql = require('mysql');
const { database } = require('./keys');
const { promisify } = require('util');
//console.log({ database });

const pool = mysql.createPool(database);

pool.getConnection((err, conenecion) => {
    if (err) {
        console.log('Error: ', err.code);
    } else if (conenecion) {
        conenecion.release();
        pool.query('CREATE TABLE IF NOT EXISTS users_test_arturo_CA(    ' +
            'user_id INT(9) NOT NULL AUTO_INCREMENT PRIMARY KEY, ' +
            'name VARCHAR(100) NOT NULL, ' +
            'second_name VARCHAR(100), ' +
            'fathers_lastname VARCHAR(100) NOT NULL, ' +
            'mothers_lastname VARCHAR(100) NOT NULL, ' +
            'borndate DATE NOT NULL, ' +
            'email VARCHAR(100) NOT NULL, ' +
            'cellphone VARCHAR(35) NOT NULL)' );


        console.log('Conexion establecida');
        return;
    }
});

pool.query = promisify(pool.query);


module.exports = pool;