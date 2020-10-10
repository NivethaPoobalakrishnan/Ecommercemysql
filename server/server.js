const express = require('express');
const bodyParser = require('body-Parser');
const mysql = require("mysql");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Learning@93",
    database:"test",
    insecureAuth : true
});

app.get("/items",(req,res)=> {
    //const username = req.body.username
    //const password = req.body.password
    db.query(
        "SELECT * FROM test.items",
        (err, result) => {
            console.log(result);
            res.send(result);
        }
     
    )
})


app.listen(5000,() => console.log("Server started on port 5000"));
