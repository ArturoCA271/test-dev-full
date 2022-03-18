const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const user = require('../controlers/userControler');
let jsonParser = bodyParser.json();

router.post('/newUser', jsonParser, user.newUser);
router.get('/test', jsonParser, (req, res) =>{
    res.send('Hola');
});
module.exports = router;