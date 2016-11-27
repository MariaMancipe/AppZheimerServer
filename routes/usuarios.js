var express = require('express');
var router = express.Router();
/* GET home page. */
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/:usuario_id', function(req, res) {
    usuarioModel.findById(req.params.usuario_id, function(err, u) {
        if (err)
            res.send(err);
        res.json(u);
    });
});
router.put('/:usuario_id', function(req, res) {
    usuarioModel.findById(req.params.usuario_id, function(err, u) {

        if (err)
            res.send(err);

        bear.name = req.body.name;  // update the bears info
        u.nombre = req.body.nombre;
        u.apodo = req.body.apodo;
        u.fecha = req.body.fecha;
        u.email = req.body.email;

        // save the bear
        u.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'El usuario fue modificado exitosamente' });
        });

    });
});

router.get('/', function(req, res) {
    usuarioModel.find(function(err,usuarios){
        if(err)
            res.send(err);
        res.json(usuarios);
    });
});

router.post('/', function(req, res) {
    var usuario = new usuarioModel();
    usuario.nombre = req.body.nombre;
    usuario.apodo = req.body.apodo;
    usuario.fecha = req.body.fecha;
    usuario.email = req.body.email;
    usuario.rutaImagen = req.body.rutaImagen;
    usuario.familiares =[];
    usuario.rutina =[];
    usuario.save(function(err){
        if(err)
            res.send(err);
        res.json({message:'Usuario creado exitosamente'});
    });
});



module.exports = router;
