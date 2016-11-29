var express = require('express');
var usuarios =[];
var index = -1;
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/:usuario_id', function(req, res) {
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].id == req.params.usuario_id){
            res.json(usuarios[i]);
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese id'});
});

router.get('/byEmail/:usuario_email', function(req, res) {
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].email == req.params.email_id){
            res.json(usuarios[i]);
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese email'});
});

router.get('/familiares/:usuario_id', function(req, res) {
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].id == req.params.usuario_id){
            res.json(usuarios[i].familiares);
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese id'});
});

router.post('/familiares/:usuario_id', function(req, res) {
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].id == req.params.usuario_id){
            var f = {
                nombre: req.body.nombre,
                apodo: req.body.apodo,
                parentesco : req.body.parentesco,
                rutaImagen : req.body.rutaImagen
            };
            usuarios[i].familiares.push(f);
            res.json({message:'Se agregó un familiar exitosamente'});
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese id'});
});

router.get('/rutina/:usuario_id', function(req, res) {
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].id == req.params.usuario_id){
            res.json(usuarios[i].rutina);
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese id'});
});

router.post('/rutina/:usuario_id', function(req, res) {
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].id == req.params.usuario_id){
            var e = {
                nombre: req.body.nombre,
                hora: req.body.hora
            };
            usuarios[i].rutina.push(e);
            res.json({message:'Se agregó un evento exitosamente'});
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese id'});
});

router.get('/ubicaciones/:usuario_id', function(req, res) {
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].id == req.params.usuario_id){
            res.json(usuarios[i].ubicaciones);
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese id'});
});

router.get('/ubicaciones/:usuario_id/:fecha', function(req, res) {
    var us =[];
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].id == req.params.usuario_id){
            for(var j=0;j<usuarios[i].ubicaciones.length;j++){
                if(usuarios[i].ubicaciones[j].fecha === req.params.fecha)
                    us.push(usuarios[i].ubicaciones[j]);
            }
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese id'});
});

router.post('/ubicaciones/:usuario_id', function(req, res) {
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].id == req.params.usuario_id){
            var u = {
                fecha: req.body.fecha,
                direccion: req.body.direccion
            };
            usuarios[i].ubicaciones.push(u);
            res.json({message:'Se agregó una ubicación exitosamente'});
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese id'});
});

router.put('/:usuario_id', function(req, res) {
    for( var i=0;i<usuarios.length;i++){
        if(usuarios[i].id == req.params.usuario_id){
            usuarios[i].nombre=req.body.nombre;
            usuarios[i].apodo=req.body.apodo;
            usuarios[i].fecha=req.body.fecha;
            usuarios[i].email=req.body.email;
            usuarios[i].rutaImagen=req.body.rutaImagen;
            res.json({message:'Se actualizó exitosamente'});
        }
    }
    res.json({message:'No se ha encontrado un usuario con ese id'});

});

router.get('/', function(req, res) {
    res.json(usuarios);
});

router.post('/', function(req, res) {
    index++;
    var u = {
        id:index,
        nombre:req.body.nombre,
        apodo: req.body.apodo,
        fecha : req.body.fecha,
        email : req.body.email,
        rutaImagen : req.body.rutaImagen,
        familiares: [],
        rutina: [],
        ubicaciones:[]
    };
    usuarios.push(u);
    res.json({message:'Usuario creado exitosamente'});

});



module.exports = router;
