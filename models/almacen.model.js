var mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nombre:{type:String,required:[true,'Este campo es necesario']},
    direccion:{type:String,required:true,minlength:[3,'Como minimo debe ser 10 caracteres']},
    estado:Boolean,
    creacion:{type:Date,default:Date.now},
    ultimaModificacion:Date,
    usuarioModificacion:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
},{
    collection:'almacen'
});
const model = mongoose.model('almacen',schema);
module.exports = model;

/**
Buenas tardes,

vamos realizando una app web que tenga 

almacenes (que tenga index, nuevo, editar, borra), y 
->nombre, direccion
 producos (que tenga index, nuevo, editar, borra).
-> nombre, precio, cant
tenemos que avanzar sobre layout y necesitamos este proyecto.
*/