const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

/* EXPRESS STATIC */
app.use(express.static('public'));

/* COLOCACION DE RUTAS */
app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/header', (req,res) => res.sendFile(path.join(__dirname,'views','partials','header.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname,'views','register.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'views','login.html')));


/* LEVANTAR SERVIDOR */
app.listen(3030,() => console.log(`Server runing in http://localhost:${PORT}`));
