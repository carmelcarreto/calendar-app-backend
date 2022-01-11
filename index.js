const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

//Crear el servidor de express
const app = express();

//Rutas
app.get('/', (req, res) => {

    console.log('se requiere /');
    res.json({
        ok: true
    })
});


//Escuchar peticiones
app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});