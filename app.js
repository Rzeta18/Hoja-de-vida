const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse application/x-www-form urlencoded
app.use(bodyParser.urlencoded({extrended: false}));

//resivir informacion/json
// parse application.json
app.use(bodyParser.json())

require('dotenv').config();

const port = process.env.PORT || 3000;

// Motor de plantilla
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// Rutas Web
app.use('/', require('./router/RutasWeb'));

app.use((req, res, nex) =>{
	// res.status(404).sendFile(__dirname + '/public/404.html');
	res.status(404).render('404', {
		Titulo: 'Error 404',
		descripcion: 'Titulo del sito wed'
	});
});


app.listen(port,() =>{
	console.log(`servidor funcionando en el puerto http://localhost:${port}`);
});
