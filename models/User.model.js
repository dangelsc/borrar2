var mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nombre:{type:String,required:true},
    login:String,
    password:String,
    estado:Boolean,
},{
    collection:'user'
});
const model = mongoose.model('user',schema);
module.exports = model;