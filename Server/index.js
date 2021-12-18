const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require("mysql2")
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Moez@123',
    database: 'libas_e_kheriah',
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const user = {
    email: "",
    password: "",
    user_id: -1,
    accountType: ""
}

//Register Form
app.post("/api/insert/user", (req, res) => {

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
    db.query(sqlInsert, [first_name, last_name, password, phone_number, city, full_address, email, age], (err, result) => {
        res.send(err);
    })
})

app.post("/api/insert/give", (req, res) => {
    const category = req.body.category
    const description = req.body.description
    const size = req.body.size
    const num_pieces = req.body.num_pieces
    const sqlInsertDonation = "insert into give (user_id,category,description,size,num_pieces)" +
        "value (?,?,?,?,?)"
    db.query(sqlInsertDonation, [user.user_id, category, description, size, num_pieces], (err, result) => {
        res.send(err)
    })


})
app.post("/api/insert/take", (req, res) => {
    const category = req.body.category
    const description = req.body.description
    const size = req.body.size
    const num_pieces = req.body.num_pieces
    const sqlInsertDonation = "insert into take (user_id,category,description,size,num_pieces)" +
        "value (?,?,?,?,?)"
    db.query(sqlInsertDonation, [user.user_id, category, description, size, num_pieces], (err, result) => {
        res.send(err)
    })


})
app.post("/api/insert/employee", (req, res) => {

    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const address = req.body.address
    const age = req.body.age
    const city = req.body.city
    const email = req.body.email
    const password = req.body.password
    const sqlInsert = "insert into employee(first_name,last_name,email,password,admin_id,address," +
        "age,city) value (?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [first_name, last_name, email, password, user.user_id, address, age, city], (err, result) => {
        res.send(err)
    })
})

app.post("/api/signIn/admin", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const sqlSelect = "select email, password, admin_id from admin where" +
        " email = ? and password = ?"
    db.query(sqlSelect, [email, password], (err, result) => {
        if (result.length === 1) {
            user.email = result[0].email
            user.password = result[0].password
            user.user_id = result[0].admin_id
            user.accountType = "admin"
        }
        res.send(result)
    })
})

app.post("/api/signIn/employee", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const sqlSelect = "select email, password, emp_id from employee where" +
        " email = ? and password = ?"
    db.query(sqlSelect, [email, password], (err, result) => {
        if (result.length === 1) {
            user.email = result[0].email
            user.password = result[0].password
            user.user_id = result[0].emp_id
            user.accountType = "employee"
        }
        res.send(result)
    })
})


//SignIn form
app.post("/api/signIn/user", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const sqlSelect = "select email, password, user_id from user where" +
        " email = ? and password = ?"
    db.query(sqlSelect, [email, password], (err, result) => {
        if (result.length === 1) {
            user.email = result[0].email
            user.password = result[0].password
            user.user_id = result[0].user_id
            user.accountType = "user"
        }
        res.send(result)
    })

})

app.post("/api/insert/userEligibity", (req, res) => {

    const has_car = req.body.has_car
    const has_bike = req.body.has_bike
    const is_married = req.body.is_married
    const salary = req.body.salary
    const company = req.body.company
    const siblings = req.body.siblings
    const children = req.body.children
    const sqlUpdate = "update user set has_car = ? , has_bike = ?, is_married = ?," +
        "salary = ?, company = ?, siblings = ?, children = ? where email = ?"
    db.query(sqlUpdate, [has_car, has_bike, is_married, salary, company, siblings, children, user.email],
        (err, result) => {
            res.send(result)
        })
})

app.post("/api/currentUser", (req, res) => {
    const info = []
    info[0] = user.email
    info[1] = user.accountType
    res.send(info)
})
app.post("/api/signOut/currentUser", (req, res) => {
    user.email = ""
    user.password = ""
    user.user_id = -1
    user.accountType = ""
    res.send(true)
})


app.post("/api/check/is_eligible/user", (req, res) => {
    const sqlSelect = "Select is_eligible from user where email = ? and salary"
    db.query(sqlSelect, [user.email], (err, result) => {
        res.send(result)
    })
})

app.post("/api/fetch/elligibleUserCandidates", (req, res) => {
    const sqlSelect = "Select concat(first_name,' ',last_name) as name,phone_number," +
        "city, email,salary,siblings,children,company,is_married,has_car,has_bike" +
        " from user where is_eligible = false and salary"
    db.query(sqlSelect, [], (err, result) => {
        res.send(result)
    })
})
app.post("/api/update/elligibleUserCandidates", (req, res) => {
    const email = req.body.email
    const sqlSelect = `update user set is_eligible = 1, admin_id = ${user.user_id} where email = ?`
    db.query(sqlSelect, [email], (err, result) => {
        res.send(result)
    })
})
app.post("/api/update/give",(req,res)=>{
    const donation_id = req.body.donation_id
    const sqlUpdate = `update give set is_done = 1, emp_id = ${user.user_id} where 
                        donation_id = ?`
    db.query(sqlUpdate,[donation_id],(err,result)=>{
        res.send(result)
    })
})
app.post("/api/update/take",(req,res)=>{
    const donation_id = req.body.donation_id
    const sqlUpdate = `update take set is_done = 1, emp_id = ${user.user_id} where 
                        donation_id = ?`
    db.query(sqlUpdate,[donation_id],(err,result)=>{
        res.send(result)
    })
})

app.post("/api/fetch/empUI/giveDone", (req, res) => {
    const giveDone = "select * from empGive where is_done != 0"
    db.query(giveDone, [], (err, result) => {
        res.send(result)
    })
})
app.post("/api/fetch/empUI/giveRem", (req, res) => {
    const giveRem = "select * from empGive where is_done = 0"
    db.query(giveRem, [], (err, result) => {
        res.send(result)
    })    
})
app.post("/api/fetch/empUI/takeDone", (req, res) => {
    const takeDone = "select * from empTake where is_done != 0"
    db.query(takeDone, [], (err, result) => {
        res.send(result)
    })    
})
app.post("/api/fetch/empUI/takeRem", (req, res) => {
    const takeRem = "select * from empTake where is_done = 0"
    db.query(takeRem, [], (err, result) => {
        res.send(result)
    })    
})

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3001, () => {
    console.log('Running on port 3001')
})