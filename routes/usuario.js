import express from 'express'
var bodyParser = require('body-parser');

const router = express.Router();

//importar el modelo registro

import Usuarios from '../models/Usuarios';

// Crear un nuevo usuario
router.post('/nuevo-usuario', async(req, res)=>{

const body = req.body;
try {

    const usuarioDB= await Usuarios.create(body);
    res.status(200).json(usuarioDB);
    
} catch (error) {

    return res.status(500).json({

        mensaje:'Ocurrio un error',
        error
     })
    
    }
});

//Busqueda por ID de usuario

router.get('/Usuarios/:id', async(req, res)=>{

    const _id=req.params.id;

    try {

        const usuarioDb= await Usuarios.findOne({_id});
        res.json(usuarioDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Busqueda con todos los documentos de usuarios

router.get('/Usuarios',async(req,res)=>{

    try {

        const usuarioDb=await Usuarios.find();
        res.json(usuarioDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

// eliminar un registro de un usuario

router.delete('/Usuarios/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const usuarioDb=await Usuarios.findByIdAndDelete({_id});
        if(!usuarioDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(usuarioDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Actualizar un registro de un usuario

router.put('/Usuarios/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const usuarioDb= await Usuarios.findByIdAndUpdate(_id,body,{new:true});
        res.json(usuarioDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }


});

//Busqueda por correo y password

router.post('/LoginUser', async(req, res)=>{

    //guardo el objeto que quiero comparar
    const {correo, password} = req.body;

    Usuarios.findOne({correo}, (err, user) => {
        if(err){
            res.json("error de autenticacion -> " + err);
        }else if(!user){
            res.json("el email no existe ->" + err);
        }else{
            user.isCorrect(password, (err, result) => {
                if(err){
                    res.json("error de autenticacion de password -> " + err);
                }else if(result){
                    res.json(user);
                }
            });
        }
    });
});

//Exportacion de router
module.exports=router;