// parameter: tham số
// arguments: đối số

// function sum(){
//     let total = 0;
//     for(let i = 0 ; i < arguments.length; i++){
//         total += arguments[i]
//     }
//     return total
// }
function total(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return total;
}
let numbers = [4, 4, 3, 32, 2, 2, 2, 4, 4, 45, 4]
console.log(total(...numbers))