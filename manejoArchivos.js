const fileSystem = require("fs");

//Callback es una funcion que se ejecuta cuando termina de crear un archivo
// El tercer parametro de writeFile es un callback
// Esto es codigo asincrono, no se necesita esperar a que termine.

fileSystem.writeFile("./texto.txt", "Linea 1", function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Archivo creado.");
});

console.log("Ultima linea de codigo.");

//Ejemplo de codigo bloqueante que se debe terminar de ejecutar para seguir con lo que siga.
//const result = fileSystem.writeFile("./texto.txt", "");

//Ejemplo de consulta a base de datos de manera bloqueante.
//const users = query("SELECT * FROM Users");

//Ejemplo de consulta a base de datos de manera asincrona.
/*
query("SELECT * FROM Users", function (err, users){
    if (err){
        console.log(err);
    } 
    if (users){

    }
})
*/

//Codigo no bloqueante para leer un archivo.
fileSystem.readFile("./texto.txt", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
