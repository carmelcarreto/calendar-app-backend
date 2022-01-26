/*
    Rutas de Eventos
    host + /api/events
*/

const { Router } = require("express");
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require("../middlewares/validate-jwt");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");


const router = Router();


//Todas tiene que pasar por la validacion del JWT
router.use(validateJWT);

//Obtener eventos
router.get('/', getEvents);

//Crear nuevo evento
router.post(
    '/', 
    [
        check('title','Title is required').not().isEmpty(),
        check('start', 'Start date is required').custom( isDate),
        check('end', 'The and date is mandatory').custom( isDate),
        validateFields
    ],
    createEvent
);

//Actualizar evento
router.put(
    '/:id', 
    [
        check('title','Title is required').not().isEmpty(),
        check('start', 'Start date is required').custom( isDate),
        check('end', 'The and date is mandatory').custom( isDate),
        validateFields
    ], 
updateEvent);

//Eliminar evento
router.delete('/:id', deleteEvent);

module.exports = router; 