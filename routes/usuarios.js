var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:usuario_id', function(req, res, next) {
    res.json({ message: 'hooray! welcome to our api!'+req.params.usuario_id });
});



module.exports = router;
