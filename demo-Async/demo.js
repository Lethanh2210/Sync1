//Async Callback
// function asyncFunction(callback) {
//     console.log("Start");
//     setTimeout(() => {
//         callback();
//     }, 1000);
//     console.log("Waiting");
// }
//
// let printEnd = function() {
//     console.log("End");
// }
//
// asyncFunction(printEnd);
/*Start
Waiting
End*/



//Promise
// function printNumber(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number < 0) {
//                 reject();
//             } else {
//                 console.log(number);
//                 resolve();
//             }
//         }, 500)
//     })
// }
// printNumber(1)
//     .then(()=> printNumber(2))
//     .then(() => printNumber(3))
//     .then(() => printNumber(-1))
//     .catch(() => {
//         console.log('number < 0')
//     })

//Async-Await
// function printNumber(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number < 0) {
//                 reject('number < 0')
//             } else {
//                 console.log(number)
//                 resolve();
//             }
//         }, 100)
//     })
// }
//
// async function printAll(){
//     await printNumber(1);
//     await printNumber(2);
//     await printNumber(-3);
//
// }
//
// printAll().catch(err => console.log(err)).then()

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {reject("done")}, 100);
//
// });
//
// // resolve runs the first function in .then
// promise.then(null, error => console.log(error)
//      // shows "done!" after 1 second
//     // doesn't run
// )

// Promise.resolve('Success!')
//     .then(data =>
//         data.toUpperCase()
//     )
//     .then(data => {
//         console.log(data)
//     })

var fs = require('fs');

async function functionReadFile(){
    fs.readFile('sample.txta',
        function(err, data) {
            if (err) throw err;
        });

}
async function demo(){

    try{
        await functionReadFile();

    } catch(err){
        console.log("In Catch Block")
        console.log(err);
    }

}
demo().then();

