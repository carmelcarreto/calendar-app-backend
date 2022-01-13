/*
    Rutas de Eventos
    host + /api/events
*/

const { Router } = require("express");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


//Todas tiene que pasar por la validacion del JWT
router.use(validarJWT);

//Obtener eventos
router.get('/', getEventos);

//Crear nuevo evento
router.post('/', crearEvento);

//Actualizar evento
router.put('/:id', actualizarEvento);

//Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router; 