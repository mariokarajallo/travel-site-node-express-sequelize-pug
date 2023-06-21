const express = require("express");

const app = express();

//definir puerto
const port = process.env.PORT || 4000;

app.listen(() => {
  console.log(` el servidor se esta ejecutando en el puerto ${port}`);
});
