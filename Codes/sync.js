// --------------------------------------------------------------------------------------------
// Asynchronous: is a non-blocking architecture, so the execution of one task isn’t dependent |
//               on another. Tasks can run simultaneously.                                    |
//                                                                                            |
// Synchronous: is a blocking architecture, so the execution of each operation is dependent   |
//              on the completion of the one before it.                                       |
//              Each task requires an answer before moving on to the next iteration.          |
// --------------------------------------------------------------------------------------------

// setTimeout() method sets a timer which executes a function or specified piece of
// code once the timer expires.

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