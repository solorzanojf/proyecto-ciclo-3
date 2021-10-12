import  mongoose    from "mongoose";
import  bcrypt      from 'bcrypt';

const Schema=mongoose.Schema;
const saltRounds = 10;

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

usuarioShema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

usuarioShema.methods.isCorrect = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(err, isMatch);
    });
};


//convertir a modelo
const Usuarios=mongoose.model('Registros',usuarioShema);
export default Usuarios;