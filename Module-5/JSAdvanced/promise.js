// setTimeout(function(){
//     console.log("A");
// }, 2*1000)
// setTimeout(function(){
//     console.log("B");
// }, 1*1000)
// setTimeout(function(){
//     console.log("A");
//     setTimeout(function(){
//         console.log("B");
//     }, 1*1000)
// }, 2*1000)


const promise = new Promise(
    function executor(resolve, reject){
        // logic
        let number = 5;
        if (number >= 5){
            return resolve(0)
        }
        return reject("Error");
    }
)

// promise chain
promise
    .then(function(number){
        console.log(++number);
        return number;
    })
    .then(function(number){
        console.log(++number);
        return number;
    })
    .then(function(number){
        console.log(++number);
        return number;
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("DONE");
    })