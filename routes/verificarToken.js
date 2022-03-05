const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("token-autenticado");
  if (!token) return res.status(401).send("Acesso negado");
  try {
    const verificado = jwt.verify(token, process.env.JWT_SECRET); 
    req.usuario = verificado;
    next(); 
  } catch {
    res.status(400).send("Token Invalido");
  }
};
