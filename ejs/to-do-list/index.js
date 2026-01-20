var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//configuraciones
app.use(bodyParser.urlencoded({ extended: true }));

var path = __dirname + "/src/views";
app.set("views", path); // donde estan los archivos que se van a mostrar en el navegador (views o vistas)
app.set("view engine", "ejs"); //configuro el motor de plantilla o motor de vista a ulizar (EJS)

require('dotenv').config()
//Conexión con BD
mongoose
  .connect(process.env.EJS)
  .then(function (db) {
    console.log("¡Conectado con la base de datos! :D");
  })
  .catch(function (err) {
    console.log(`¡Ups! Ocurrió un error :( ${err}`);
  });

var Tarea = require("./src/models/Tareas");

//Ruta para mostrar el listado de todas las tareas
app.get("/inicio", async function (req, res) {
  var docs = await Tarea.find();

  var prueba = "Crear nueva Tarea";
  res.render("index", { titulo: prueba, tareas: docs, nuevo: true });
});

//Ruta para CREAR una nueva Tarea
app.post("/tarea", async function (req, res) {
  var datos = req.body;

  var nueva_tarea = new Tarea(datos);
  await nueva_tarea.save();
  console.log("Todo ok por aca");
  res.redirect("/inicio");
});

//Ruta para ELIMINAR una Tarea
app.get("/eliminar/:id_tarea", async function (req, res) {
  var id = req.params.id_tarea;
  var tarea = await Tarea.findById(id);
  await tarea.deleteOne();
  res.redirect("/inicio");
});

//Ruta para MODIFICAR una Tarea
app.get("/modificar/:id_tarea", async function (req, res) {
  //aca pasa algo
  var id = req.params.id_tarea;

  //Forma 1
  var tarea = await Tarea.findById(id);

  //Buscamos en la BD todas la tareas
  var documentos = await Tarea.find();

  res.render("index", {
    titulo: "Modificando la tarea: " + id,
    doc: tarea,
    tareas: documentos,
    nuevo: false,
  });
});

app.post("/modificar/:id_tarea", async function (req, res) {
  var id = req.params.id_tarea;

  //Forma 1
  // var tarea = await Tarea.findById(id);
  // tarea.nombre = req.body.nombre;
  // tarea.descripcion = req.body.descripcion;
  // tarea.prioridad = req.body.prioridad;
  // await tarea.save();

  //Forma 2
  var tarea = await Tarea.updateOne({ _id: id }, req.body);

  res.redirect("/inicio");
});

app.listen(3000);
