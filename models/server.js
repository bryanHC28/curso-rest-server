const express = require('express')
const cors = require('cors')
class Server{

constructor(){
  this.usuariosPath= '/api/usuarios'
this.app= express();
this.PORT=process.env.PORT;
this.middlewares();
this.routes();
 
 
}

middlewares(){
  this.app.use(cors());

  this.app.use(express.json());

    this.app.use(express.static('public'));

}

routes(){

 
   this.app.use(this.usuariosPath ,require('../Routes/user'));

}

listen(){
    this.app.listen(this.PORT,()=>{

        console.log('APP CORRIENDO POR EL PUERTO',this.PORT);
      })
}



}

module.exports= Server;