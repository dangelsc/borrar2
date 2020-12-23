var mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nombre:{type:String,required:true},
    precio:Number,
    cantidad:Number,
    estado:Boolean,
    usuarioModificacion:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
},{
    collection:'producto',
    timestamps: true
});
const model = mongoose.model('producto',schema);
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