
const{response , request}=require('express')


const usuariosGet= (req=request, res=response)=> {
const {q,nombre='no name',apikey,page=1,limit}=req.query;


    res.json({msg:'get API -CONTROLLER',
    q,
    nombre,
    apikey,
    page,
    limit
  
  });
  }
  
const usuariosPut= (req=require, res=response)=> {

const {idprb} = req.params
    res.send({msg:'put API- CONTROLLER',idprb})
  }  
const usuariosPost= (req, res=response)=> {

  const {nombre,edad}= req.body
    res.send({msg:'post API - CONTROLLER',
              nombre,
            edad})
  }
const usuariosDelete=  (req, res=response)=> {
    res.send({msg:'delete API - CONTROLLER'})
  } 
const usuariosPatch= (req, res)=> {
    res.send({msg:'patch API - CONTROLLER'})
  }

  module.exports={
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch
  }