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

app.get('/createuser',(req,res) => {
let user = {name:"debil",surname:"debilovych",email:"debil@debil.com",phone:"123123123",password:"3"}
let sql = "INSERT INTO users set ?"
let query  = db.query(sql,user,(err,result) =>{
	if(err) throw err;
	console.log(result);
	res.send("User E");
	});
});


app.listen(3000)
app.get("/", function(req, res) {
	res.send("<a href='/j'>перейти кудась</a>")
})

app.get("/j", function(req, res) {
	// res.send("<h1>Я дурнуватий</h1>")
	res.json({
		"HTO": "DEBIL",
		"KOMU": "DEBILU",
		"VIK": 14,
		"boolien":true
	})
})