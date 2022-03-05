const router = require("express").Router();
const Usuario = require("../model/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { validarLogin } = require("../validarDados");

router.post("/", async (req, res) => {
  const { error } = validarLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const usuario = await Usuario.findOne({ email: req.body.email });
  if (!usuario) return res.status(400).send("Email não encontrado");

  const verificarSenha = await bcrypt.compare(req.body.senha, usuario.senha);
  if (!verificarSenha) return res.status(400).send("Senha incorreta");

  const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET);
  res.header("token-autenticado", token).send(token); 
});

module.exports = router;
