const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT  || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`
	fs.appendFile('server.log', log + '\n', (err) => {
		if(err)
		{
			console.log('Unable to append to file')
		}
	});
	next();
});

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
})

app.get('/', (req,res) => {
	res.render('home.hbs', {
		text1: "CREATIVE DIRECTION",
		text2: "BRANDING",
		text3: "DESIGN",
		text4: "ARTIST DEVELOPMENT",
		text5: "PROJECT MANAGEMENT"
	});
});

app.get('/debug', (req,res) => {
	res.render('maintinance.hbs');
})

app.get('/home', (req,res) => {
	res.render('home.hbs', {
		text1: "CREATIVE DIRECTION",
		text2: "BRANDING",
		text3: "DESIGN",
		text4: "ARTIST DEVELOPMENT",
		text5: "PROJECT MANAGEMENT"
	});
});

app.get('/portfolio', (req,res) => {
	res.render('home.hbs');
});

app.get('/sound', (req,res) => {
	res.render('home.hbs');
});

app.get('/shop', (req,res) => {
	res.render('home.hbs');
});

app.get('/contact', (req,res) => {
	res.render('contact.hbs', {
	});
});

app.get('/help', (req,res) => {

});


app.get('/bad', (req,res) => {
	res.send({
		errorMessage: 'Unable to handle request'
	});	
});


app.listen(port, () => {
	console.log(`Server is up on ${port}`);
});