import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const cotizacionShema=new Schema({
    tipo_estadia:{type:String},
    descripcion_estadia:{type:String, required:[true,'Fecha ingreso obligatorio']},
    cantidad_personas:{type:Number,required:[true,'Numero de personas']},
    fecha_ingreso:{type:String, required:[true,'Fecha ingreso obligatorio']},
    fecha_salida:{type:String, required:[true,'Fecha salida obligatorio']},
    servicio_adicional:{type:String}
});

//convertir a modelo
const Cotizaciones=mongoose.model('Cotizaciones',cotizacionShema);
export default Cotizaciones;