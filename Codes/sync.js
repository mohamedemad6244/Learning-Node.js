let one = function(){
    setTimeout(function(){
        console.log("one");
    },1000);
}   //async

let two = function(){
    setTimeout(function(){
        console.log("two");
    },3000);
}   //async

let three = function(){
    console.log("three");
}   //sync

one();
two();
three();