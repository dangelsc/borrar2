var express = require('express');
var router = express.Router();
var control = require('../controllers/almacen.controller');
var estoyLogin = require('../middleware/acceso');



router.get('/',estoyLogin,control.index);
router.get('/admin',estoyLogin,control.indexAdmin);
router.get('/nuevo',estoyLogin,control.nuevo);
router.post('/nuevo',estoyLogin,control.nuevoPost);
router.get('/edit/:id',estoyLogin,control.edit);
router.post('/edit/:id',estoyLogin,control.editPost);
router.get('/borrar/:id',estoyLogin,control.borrar);

module.exports = router;

