const pool = require("../database")

exports.newUser = async (req, res)=>{
    console.log('new user', req.body);
    const {
        name,
        second_name,
        fathers_lastname,
        mothers_lastname,
        borndate,
        email,
        cellphone
    } =  req.body;

    const newUser = {
        name,
        second_name,
        fathers_lastname,
        mothers_lastname,
        borndate,
        email,
        cellphone
    }

    await pool.query('INSERT INTO users_test_arturo_CA set ?', [newUser]);
    console.log('Se inserto correctamente el registro');
    res.send('Se recibio exitosamente');
}