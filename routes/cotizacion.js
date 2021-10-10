import express from 'express'
const router = express.Router();

//importar el modelo de las cotizaciones

import Cotizaciones from '../models/Cotizaciones';

// Crear nueva cotización
router.post('/nueva-cotizacion', async(req, res)=>{

const body = req.body;
try {

    const cotizarDB= await Cotizaciones.create(body);
    res.status(200).json(cotizarDB);
    
} catch (error) {

    return res.status(500).json({

        mensaje:'Ocurrio un error',
        error
     })
    
    }
});

//Busqueda por ID de cotización

router.get('/Cotizaciones/:id', async(req, res)=>{

    const _id=req.params.id;

    try {

        const cotizarDb= await Cotizaciones.findOne({_id});
        res.json(cotizarDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Busqueda de todas las cotizaciones

router.get('/Cotizaciones',async(req,res)=>{

    try {

        const cotizarDb=await Cotizaciones.find();
        res.json(cotizarDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

// eliminar cotización

router.delete('/Cotizaciones/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const cotizarDb=await Cotizaciones.findByIdAndDelete({_id});
        if(!cotizarDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(cotizarDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Actualizar cotización

router.put('/Cotizaciones/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const cotizarDb= await Cotizaciones.findByIdAndUpdate(_id,body,{new:true});
        res.json(cotizarDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }


});


//Exportacion de router
module.exports=router;