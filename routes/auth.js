/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {

    console.log('se requiere /');
    res.json({
        ok: true
    })
});

module.exports = router;