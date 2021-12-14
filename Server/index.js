const express = require("express")
const app = express()
const mysql = require("mysql2")
const db = mysql.createPool({
    host: 'localhost',
    user:  'root',
    password:'Moez@123',
    database:'libas_e_kheriah',
})

app.get("/",(req,res)=>{
    res.send("Hello World")    
})

app.listen(3001, ()=>{
    console.log('Running on port 3001')
})