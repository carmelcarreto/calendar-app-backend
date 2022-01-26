/*
    Rutas de Eventos
    host + /api/events
*/

const { Router } = require("express");
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require("../middlewares/validate-jwt");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");



const router = Router();


//Todas tiene que pasar por la validacion del JWT
router.use(validateJWT);

//Obtener eventos
router.get('/', getEventos);

//Crear nuevo evento
router.post(
    '/', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate),
        check('end', 'Fecha de fin es obligatoria').custom( isDate),
        validateFields
    ],
    crearEvento
);

//Actualizar evento
router.put(
    '/:id', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate),
        check('end', 'Fecha de fin es obligatoria').custom( isDate),
        validateFields
    ], 
actualizarEvento);

//Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router; 