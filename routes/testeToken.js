const router = require("express").Router();
const verificarToken = require('./verificarToken')
router.get("/", verificarToken,function (req, res) { 
    res.send(req.usuario)
  });
  
module.exports = router;