import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// conectar la base de datos local
db.authenticate()
  .then(() => console.log("Base de datos conectado"))
  .catch((error) => console.log("este es el error:->", error));

//definir puerto
const port = process.env.PORT || 4000;

// habilitar PUG
app.set("view engine", "pug");

// add middleware personalizado -> Obtner el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
});

//definir la carpeta publica
app.use(express.static("public"));

// agregar Router
app.use("/", router);

app.listen(port, () => {
  console.log(` el servidor se esta ejecutando en el puerto ${port}`);
});
