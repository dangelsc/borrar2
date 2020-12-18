var Personal= require('../models/personal.model');
var personal='personal';
var index=function(req,res,next){
    console.log("1");
    Personal.find({estado:1},(err,lista)=>{
        /*console.log("2");
        console.log(err)
        console.log(lista)*/
        if(err)
        {
            return res.render('./'+personal+'/index',{lista:[],error:err});
        }
        return res.render('./'+personal+'/index',{lista:lista,error:null});
    });
}
function nuevo(req,res,next){
    let aux = new Personal();
    aux._id=null;
    aux.error=null;
    return res.render('./'+personal+'/form',aux);
}
function nuevoPost(req,res,next){
    let aux= new Personal(req.body);
    aux.estado=1;
    aux.save((err,dato)=>{
        if(err){
            aux.error=err;
            aux._id=null;
            return res.render('./'+personal+'/form',aux);
        }
        if(dato)
            return res.redirect('/'+personal);
        else{
            aux.error='Paso algo, intenta mas tarde';
            aux._id=null;
            return res.render('./'+personal+'/form',aux);
        }
    });
}
function edit(req,res,next){
    Personal.findById(req.params.id,(err,dato)=>{
        if(err){
            return res.redirect('/'+personal);
        }
        if(dato){
            dato.error=null;
            return res.render('./'+personal+'/form',dato);
        }else{
            return res.redirect('/'+personal);
        }
    });
}
function editPost(req,res ,next){
    let auxpersonal=new Personal(req.body);
    if(err=auxpersonal.validateSync()){
        auxpersonal._id=req.params.id;
        auxpersonal.error=err;
        return res.render('./'+personal+'/form',auxpersonal);
    }
    Personal.findByIdAndUpdate(req.params.id,req.body,(err,dato)=>{
        if(err){
            req.body.error=err;
            req.body._id=null;
            return res.render('./'+personal+'/form',req.body);
        }
        return res.redirect('/'+personal);
    });
}
function borrar(req,res,next){
    Personal.findByIdAndUpdate(req.params.id,{estado:0},(err,dato)=>{
        if(err){
            req.body.error=err;
            return res.redirect('/'+personal);
        }
        return res.redirect('/'+personal);
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