import express from "express";

const app = express();

//definir puerto
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Inicio");
});

app.get("/contacto", (req, res) => {
  res.send("Contacto");
});

app.get("/nosotros", (req, res) => {
  res.send("Nosotros");
});

app.listen(port, () => {
  console.log(` el servidor se esta ejecutando en el puerto ${port}`);
});
