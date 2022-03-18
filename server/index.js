const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.set('port', 8000);

app.use('/', require('./routes/userRoutes'));

app.listen(app.get('port'), () =>{
    console.log('Servidor iniciado', app.get('port'));
})