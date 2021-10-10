import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const reservaShema=new Schema({
    nombres:{type:String, required:[true,'Nombre obligatorio']},
    apellidos:{type:String, required:[true,'Apellido obligatorio']},
    numero_documento:{type:Number,required:[true,'Numero de Documento obligatorio']},
    correo:{type:String,required:[true,'Correo obligatorio']},
    numero_telefonico:{type:Number,required:[true,'Numero telefono obligatorio']},
    cantidad_personas:{type:Number,required:[true,'Numero de personas']},
    tipo_estadia:{type:String},
    fecha_ingreso:{type:String, required:[true,'Fecha ingreso obligatorio']},
    fecha_salida:{type:String, required:[true,'Fecha salida obligatorio']},
    servicio_adicional:{type:String}
});

//convertir a modelo
const Reservas=mongoose.model('Reservas',reservaShema);
export default Reservas;