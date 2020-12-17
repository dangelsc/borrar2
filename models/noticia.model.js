var mongoose = require('mongoose');
const schema = new mongoose.Schema({
    titulo:{type:String,required:[true,'Este campo es necesario']},
    cuerpo:{type:String,required:true,minlength:[10,'Como minimo debe ser 10 caracteres']},
    fecha:Date,
    autor:{type:mongoose.Schema.Types.ObjectId,ref:'personal'},
    estado:Boolean,
},{
    collection:'noticia'
});
const model = mongoose.model('noticia',schema);
module.exports = model;

/**
modulo de persona
* crear,editar, borrar, listar
*/