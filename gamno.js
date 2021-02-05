var express = require("express")
var mysql = require("mysql")
var app = express()

const db = mysql.createConnection({
	host:'remotemysql.com',
	user:'tdMu2YTH2n',
	password:'cnl3DmmJUy',
	database:'tdMu2YTH2n'
});

db.connect((err) => {
	if(err){
		throw err;
	}
	console.log("My sql connected")
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(8000)

app.get('/createuser',(req,res) => {
let user = {name:"debil",surname:"debilovych",email:"debil@debil.com",phone:"123123123",password:""}
let sql = "INSERT INTO users set ?"
let query  = db.query(sql,user,(err,result) =>{
	if(err) throw err;
	console.log(result);
	res.send("User E");
	});
});

app.get('/updateuser/:id',(req,res) => {
let newName = "Durak"
let sql = `UPDATE users SET name = '${newName}' WHERE id = ${req.params.id}`;
let query  = db.query(sql,(err,result) =>{
	console.log(result);
	res.send("User updated");
	});
});

app.get('/deleteuser/:id',(req,res) => {
let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
let query  = db.query(sql,(err,result) =>{
	console.log(result);
	res.send("User deleted");
	});
});

app.get('/getuser/:id',(req,res) => {
let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
let query  = db.query(sql,(err,result) =>{
	console.log(result);
	res.json(result);
	});
});

app.get('/getuser',(req,res) => {
let sql = `SELECT * FROM users`;
let query  = db.query(sql,(err,result) =>{
	console.log(result);
	res.json(result);
	});
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/login.html");

});

app.post("/",(req,res) =>{
	var newEmail = req.body.email;
	if(newEmail){
		console.log(newEmail)
	}
	else {console.log("nema")}
	res.json(req.body);
});

app.get("/j", function(req, res) {
	// res.send("<h1>Я дурнуватий</h1>")
	res.json({
		"HTO": "DEBIL",
		"KOMU": "DEBILU",
		"VIK": 14,
		"boolien":true
	})
})