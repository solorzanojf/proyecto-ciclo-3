import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const usuarioShema=new Schema({
    roll: ["admin", "usuario"],
    nombres:{type:String, required:[true,'Nombre obligatorio']},
    apellidos:{type:String, required:[true,'Apellido obligatorio']},
    tipodocumento:{type:String},
    numero_documento:{type:Number,required:[true,'Numero de Documento obligatorio'], unique: true},
    correo:{type:String,required:[true,'Correo obligatorio'], unique: true},
    numero_telefonico:{type:Number,required:[true,'Numero telefono obligatorio']},
    password:{type:String,required:[true,'Password obligatorio']}

});

//convertir a modelo
const Usuarios=mongoose.model('Registros',usuarioShema);
export default Usuarios;