//Creando un servidor a "mano"

/*
const http = require('http');

const colors = require('colors');

//Controlador del Servidor para cuando alguien ingrese a nuestro server
const handleServer = function (req, res) {
  res.writeHead(404, { "Content-type": "text/html" });

  //Respondiendo al usuario.
  res.write("<h1>Hola Mundo</h1>");
  res.end();
}

//Asincrona Crear Servidor
const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log("Server on port 3000".green);
});
*/



//Ahora crearemos un servidor usando express...

//Importamos el modulo express que sirve para crear servidores
const express = require('express');
const colors = require("colors");

// Ejecutar express y guardarlo en una constante server
const server = express();

//Cuando se pida la ruta inicial
server.get('/', function (req, res) {
    res.send("<h1>Hola Mundo con Express y NodeJS</h1>");
    res.end();
})

//Cuando escuche en el puerto 3000
server.listen(3000, function () {
    console.log("Server on port 3000".red);
});