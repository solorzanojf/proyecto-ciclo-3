import express from 'express'
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

router.get('/Usuarios/:correo/:password', async(req, res)=>{

    const _correo=req.params.correo;
    const _password=req.params.password;


    try {

        const usuarioDb= await Usuarios.find({_correo,_password});
        res.json(usuarioDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Exportacion de router
module.exports=router;