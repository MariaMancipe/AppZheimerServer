var express = require('express');
var router = express.Router();
var usuarios =[];
/* GET home page. */
router.get('/:usuario_id', function(req, res, next) {
    res.json({ message: 'hooray! welcome to our api!'+req.params.usuario_id });
});
router.put('/:usuario_id', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!'+req.params.usuario_id });
});

router.get('/', function(req, res, next) {
    res.json(usuarios);
});

router.post('/', function(req, res, next) {
    res.json({ message: 'hooray! welcome to our api!' });
});



module.exports = router;
