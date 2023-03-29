const express = require('express');
const app = express();
const cors = require('cors');
const fs = require("fs");
const path = require("path");




app.use(express.json(), cors());

port = 4080;

app.listen(port, () => {
  console.log(`Port::${port}`);
});

app.post("/examen/ex1", (req, res)=>{
  const ruta="./app/Imatges/Imatge1.jpg"
  const readableStream = fs.createReadStream(ruta,{  highWaterMark: 16384, encoding: 'utf-8'});
  console.log(path.basename(ruta))
  readableStream.on('data', (chunk)=>{
    const buf = Buffer.from(chunk)
    console.log(buf)
  })
})

app.post("/examen/ex2", (req, res)=>{
  const readableStream = fs.createReadStream("./app/Imatges/Imatge12.jpg",{encoding: 'utf-8'});
  console.log("Imatge1.jpg")
  readableStream.on('data', (chunk)=>{
    const buf = Buffer.from(chunk)
    console.log(buf)
  }).on('error', function (err){
    console.log("Al loro, no hi ha res per llegir")
  })
})

app.post("/examen/ex3", (req, res) => {
  var text;
  const readableStream = fs.createReadStream("./app/Documents/FitxerOrigen.txt", 'utf8');
  if (fs.existsSync("./app/Documents/Docs1/FitxerDesti.txt")){
    readableStream.on('data', chunk => {
      text=chunk;
      fs.appendFile("./app/Documents/Docs1/FitxerDesti.txt", text, function (err){
        if (err) throw err;
        console.log("Text Concatenat")
      })
    })
  } else {
    const writableStream = fs.createWriteStream("./app/Documents/Docs1/FitxerDesti.txt");
    readableStream.pipe(writableStream)
    console.log("Fitxer Creat i text afegit")
  }
})

app.post("/examen/ex4", (req, res)=>{
  function listarArchivos(carpeta) {
    const contenidoCarpeta = fs.readdirSync(carpeta);
    contenidoCarpeta.forEach((archivo) => {
      const rutaArchivo = path.join(carpeta, archivo);
      if (fs.statSync(rutaArchivo).isDirectory()) {
        var ruta = path.resolve(rutaArchivo)
        console.log(ruta)
        listarArchivos(rutaArchivo);
      } else {
        var onlyPath = path.resolve(rutaArchivo)
        console.log(onlyPath)
      }
    });
  }
  listarArchivos('./app');
})





