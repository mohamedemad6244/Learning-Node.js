// create server with express

const express = require ('express');
const app =express()
app.get('/user/:id', function(req,res){ //routing
    res.send("hello express user " + req.params.id) // parm
})
app.get('/profile', function(req,res){ //routing
    res.send("hello express profile" + req.query.name) // query
})
app.get('/', function(req,res){ //routing
    res.send("hello express root")
})
app.listen(8008);

// HTTP methods ==> POST , GET , PUT , DELETE