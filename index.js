const express = require("express");
const app = express();
const dotenv = require('dotenv')
const mongoose = require("mongoose");

// Rotas
const registrar = require("./routes/registrarUsuario");
const logar = require('./routes/logarUsuario')
const testeToken = require('./routes/testeToken')

dotenv.config()


// Conectar ao MongoDB
mongoose.connect(
  process.env.CONECTAR_MONGODB, 
  console.log("Conectado ao Banco de dados")
);
app.use(express.json())
app.use("/api/registrar", registrar);
app.use("/api/logar", logar);
app.use("/api/testeToken", testeToken)
app.listen(3000, () => console.log("Servidor Online"));
