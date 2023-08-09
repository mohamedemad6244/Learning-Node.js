const fs = require ('fs')

// Create Method 1 (update)
fs.appendFile('myFile1.txt','hello 1',function(err,data){
    if(err)
        console.log(err)
    else
        console.log("Saved")
})

// Create Method 2 (update)
fs.writeFile('myFile2.txt','hello 2',function(err){
    if(err)
        console.log(err)
    else
        console.log ("Saved")
})

// Delete
fs.unlink('myFile1.txt',function(err){
    if(err)
        console.log(err)
    else
        console.log("Deleted")
})

// Rename
fs.rename('myFile2.txt','myFile1.txt',function(err){
    if(err)
        console.log(err)
    else
        console.log("Renamed")
})

