/**
 * Created by Q551 on 27/11/2016.
 */


var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var UsuarioSchema   = new Schema({
    id: Schema.Types.ObjectId,
    nombre: String,
    apodo: String,
    fecha: String,
    email: String,
    rutaImagen: String,
    familiares: [{id:Schema.Types.ObjectId, nombre:String, apodo:String, parentesco: String, rutaImagen: String}],
    rutina: [{id:Schema.Types.ObjectId, nombre:String, hora:String}]

});

module.exports = mongoose.model('Usuario', UsuarioSchema);
