const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cmm',{useNewUrlParser:true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log("toto bien db");
})
module.exports = mongoose;