const express = require("express");
const app = express();
const dotenv = require('dotenv')
const mongoose = require("mongoose");

// Rotas
const authRouter = require("./routes/auth");
const post = require('./routes/post')

dotenv.config()


// Conectar ao MongoDB
mongoose.connect(
  'mongodb://127.0.0.1:27017/jwt', 
  console.log("Conectado ao Banco de dados")
);
app.use(express.json())
app.use("/api/user", authRouter);
app.use("/api/post", post)
app.listen(3000, () => console.log("Servidor Online"));
