var mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    ci:String,
    estado:Boolean,
},{
    collection:'personal'
});
const model = mongoose.model('personal',schema);
module.exports = model;