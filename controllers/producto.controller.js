var Producto= require('../models/producto.model');
var producto='producto';
var index=function(req,res,next){
    console.log("1");
    Producto.find({estado:1},(err,lista)=>{
        /*console.log("2");
        console.log(err)
        console.log(lista)*/
        if(err)
        {
            return res.render('./'+producto+'/index',{lista:[],error:err});
        }
        return res.render('./'+producto+'/index',{lista:lista,error:null});
    });
}
function nuevo(req,res,next){
    let aux = new Producto();
    aux._id=null;
    aux.error=null;
    return res.render('./'+producto+'/form',aux);
}
function nuevoPost(req,res,next){
    let aux= new Producto(req.body);
    aux.estado=1;
    aux.save((err,dato)=>{
        if(err){
            aux.error=err;
            aux._id=null;
            return res.render('./'+producto+'/form',aux);
        }
        if(dato)
            return res.redirect('/'+producto);
        else{
            aux.error='Paso algo, intenta mas tarde';
            aux._id=null;
            return res.render('./'+producto+'/form',aux);
        }
    });
}
function edit(req,res,next){
    Producto.findById(req.params.id,(err,dato)=>{
        if(err){
            return res.redirect('/'+producto);
        }
        if(dato){
            dato.error=null;
            return res.render('./'+producto+'/form',dato);
        }else{
            return res.redirect('/'+producto);
        }
    });
}
function editPost(req,res ,next){
    let auxproducto=new Producto(req.body);
    if(err=auxproducto.validateSync()){
        auxproducto._id=req.params.id;
        auxproducto.error=err;
        return res.render('./'+producto+'/form',auxproducto);
    }
    Producto.findByIdAndUpdate(req.params.id,req.body,(err,dato)=>{
        if(err){
            req.body.error=err;
            req.body._id=null;
            return res.render('./'+producto+'/form',req.body);
        }
        return res.redirect('/'+producto);
    });
}
function borrar(req,res,next){
    Producto.findByIdAndUpdate(req.params.id,{estado:0},(err,dato)=>{
        if(err){
            req.body.error=err;
            return res.redirect('/'+producto);
        }
        return res.redirect('/'+producto);
    });
}
module.exports={
    index:index,
    nuevo:nuevo,
    nuevoPost:nuevoPost,
    edit:edit,
    editPost:editPost,
    borrar:borrar
}