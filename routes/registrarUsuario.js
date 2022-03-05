const router = require("express").Router();
const Usuario = require("../model/Usuario");
const bcrypt = require("bcryptjs");
const { validarRegistro } = require("../validarDados");

router.post("/", async (req, res) => {

  const { error } = validarRegistro(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailUtilizado = await Usuario.findOne({ email: req.body.email }); // maneira de conferir se o email ja foi utilizado, é passado o item do objeto a ser pesquisado e qual quer q seja buscado
  if (emailUtilizado) return res.status(400).send("Email ja cadastrado");


  const salt = await bcrypt.genSalt(10); 
  const hashPassword = await bcrypt.hash(req.body.senha, salt); 

  const usuario = new Usuario({
    nome: req.body.nome,
    email: req.body.email,
    senha: hashPassword,
  });

  try {
    const salvarUsuario = await usuario.save(); 
    res.send({ usuario: usuario._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
