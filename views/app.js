const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '12345qwerty',
	database : ''
});

connection.connect(function(err){
	if(err){
	console.log('error connecting : ' + err.stack);
	return;
	}
	console.log('succes');
});

app.get('/', (req,res) => {
	connection.query('SELECT * FROM user',
	(error, results) => {
	console.log(results);
	res.render('hello.ejs');
	});
});

app.listen(3000);
