// http methods (API)

// CRUD 'create-read-update-delete'

const express = require ('express'); // module
const app =express() // creating server with express
const bodyParser= require('body-parser') // convert to json file
app.use(bodyParser.json()) 

let users = [] // database (array)

// GET method is used to request data from a specified resource 
app.get("/users",function(req,res){
    res.json({users:users,massage:"done"})
}) // display data 

// POST method is used to send data to a server to create/update a resource
app.post("/users", function(req,res){
    users.push(req.body)
    res.json({massage:"done"})
}) // adding data to database

// PUT method replaces all current representations of the target resource with the request payload.
app.put("/users", async function(req,res){
    let {name,email}= req.body
    await users.find((usr,index)=>{ // Find method is used to search about specified index from array.
        if(usr.name===name){
            users[index]={name:usr.name, phone:usr.phone, email:email }
            return true;
        }
    }) // After this function done the line NO 30 will print the massage.
    res.json({massage:"the data is updated"})
}) // updating data

// DELETE method deletes the specified resource.
app.delete("/users",function(req,res){
    let {name}= req.body
    users.find((usr,index)=>{  
        if(usr.name===name){
            users.splice(users[index],1) // Splice method is used to delete specified index from array.
            return true;
        }
    })
    res.json({massage:"the data is deleted"})
})

app.listen(3000);  // function is used to bind and listen to the connections on the specified host and port.