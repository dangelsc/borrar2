var express = require('express');
var router = express.Router();
var control = require('../controllers/producto.controller');

router.get('/',control.index);
router.get('/nuevo',control.nuevo);
router.post('/nuevo',control.nuevoPost);
router.get('/edit/:id',control.edit);
router.post('/edit/:id',control.editPost);
router.get('/borrar/:id',control.borrar);

module.exports=router;
