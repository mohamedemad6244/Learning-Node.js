// http methods (API)

const express = require ('express'); // module
const app =express() // creating server with express
const bodyParser= require('body-parser') // convert to json file
app.use(bodyParser.json()) 

let users = [] // database

app.get("/users",function(req,res){
    res.json({users:users,massage:"done"})
}) // display data 

app.post("/users", function(req,res){
    users.push(req.body)
    res.json({massage:"done"})
}) // adding data to database

app.put("/users", async function(req,res){
    let {name,email}= req.body
    await users.find((usr,index)=>{
        if(usr.name===name){
            users[index]={name:usr.name, phone:usr.phone, email:email }
            return true;
        }
    })
    res.json({massage:"the data is updated"})
}) // updating data

app.delete("/users",function(req,res){
    let {name}= req.body
    users.find((usr,index)=>{
        if(usr.name===name){
            users.splice(users[index],1)
            return true;
        }
    })
    res.json({massage:"the data is deleted"})
})

app.listen(3000);