import express from 'express'
const router = express.Router();

//importar el modelo de las reservas

import Reservas from '../models/Reservas';

// Crear nueva reserva
router.post('/nueva-reserva', async(req, res)=>{

const body = req.body;
try {

    const resevarDB= await Reservas.create(body);
    res.status(200).json(resevarDB);
    
} catch (error) {

    return res.status(500).json({

        mensaje:'Ocurrio un error',
        error
     })
    
    }
});

//Busqueda por ID de reserva

router.get('/Reservas/:id', async(req, res)=>{

    const _id=req.params.id;

    try {

        const resevarDb= await Reservas.findOne({_id});
        res.json(resevarDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Busqueda de todas las reservas

router.get('/Reservas',async(req,res)=>{

    try {

        const resevarDb=await Reservas.find();
        res.json(resevarDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

// eliminar reserva

router.delete('/Reservas/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const resevarDb=await Reservas.findByIdAndDelete({_id});
        if(!resevarDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(resevarDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Actualizar reserva

router.put('/Reservas/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const resevarDb= await Reservas.findByIdAndUpdate(_id,body,{new:true});
        res.json(resevarDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }


});


//Exportacion de router
module.exports=router;