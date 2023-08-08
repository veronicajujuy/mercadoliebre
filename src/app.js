const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3001, () => console.log("Servidor corriendo en puerto 3001"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});
app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/registro.html"));
});
