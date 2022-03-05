const Joi = require("@hapi/joi");
const validarRegistro = (data) => {
  const schema = Joi.object({
    nome: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    senha: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const validarLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    senha: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

module.exports.validarRegistro = validarRegistro;
module.exports.validarLogin = validarLogin;
