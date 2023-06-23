import express from "express";
import router from "./routes/index.js";

const app = express();

//definir puerto
const port = process.env.PORT || 4000;

// agregar Router
app.use("/", router);

app.listen(port, () => {
  console.log(` el servidor se esta ejecutando en el puerto ${port}`);
});
