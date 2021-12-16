const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require("mysql2")
const db = mysql.createPool({
    host: 'localhost',
    user:  'root',
    password:'Moez@123',
    database:'libas_e_kheriah',
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const user = {
    email: "",
    password:""
}

//Register Form
app.post("/api/insert/user",(req,res)=>{
    
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const password = req.body.password
    const phone_number = req.body.phone_number
    const city = req.body.city
    const full_address = req.body.full_address
    const email = req.body.email
    const age = req.body.age

    const sqlInsert = "insert into user (first_name,last_name,password,phone_number,city,full_address,email,age)" +
                      "value (?,?,?,?,?,?,?,?)"
    db.query(sqlInsert,[first_name,last_name,password,phone_number,city,full_address,email,age],(err,result)=>{
        res.send(err);
    })    
})

//SignIn form
app.post("/api/signIn/user",(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const sqlSelect = "select email, password from user where"+
                      " email = ? and password = ?"
    db.query(sqlSelect,[email,password],(err,result)=>{
        if(result.length===1){
            user.email = result[0].email
            user.password = result[0].password
        }
        res.send(result)
    })                  

})

app.post("/api/currentUser",(req,res)=>{
    console.log("Current user -> " + user.email + " " + user.password)
    res.send(user.email)
})
app.post("/api/signOut/currentUser",(req,res)=>{
    user.email = ""
    user.password = ""
    console.log("Current user -> " + user.email + " " + user.password)
    res.send(true)
})

app.get("/",(req,res)=>{
    res.send("Hello World")    
})

app.listen(3001, ()=>{
    console.log('Running on port 3001')
})