// declaration funcion
sum(10, 15)
function sum(n1, n2) {
    console.log(n1 + n2);
}
// expression function
// const minus = function (n1, n2) {
//     console.log(n1 - n2);
// }
// const minus = (n1, n2) => console.log(n1 - n2);
// minus(15, 10);

// const greeting = function(msg){
//     console.log(msg);
// }
// const greeting = (msg) => console.log(msg);

// greeting("Hello anh em")

// const hello = function() {
//     console.log("Hello");
// }
const hello = () => console.log("Hello");

hello();

// anonymous/callback function
let numbers = [1, 3, 4, 5, 5];
// let result = numbers.reduce(function (total, value) {
//     return total + value
// })
let result = numbers.reduce((total, value) =>  total + value )

console.log(result);
// defined class
// function Student() {
//     // defined method
//     this.greeting = function () {
//         return 'hello';
//     }
// }
class Student{
    // defined method
    greeting() {
        return 'hello';
    }
}
