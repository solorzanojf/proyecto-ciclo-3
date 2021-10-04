import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const notaShema=new Schema({
    nombre:{type:String, required:[true,'Nombre obligatorio']},
    descripcion:String,
    usuarioId:String,
    date:{type:Date, default: Date.now},
    activo:{type:Boolean, default:true}
});

//convertir a modelo
const Nota=mongoose.model('Nota',notaShema);
export default Nota;