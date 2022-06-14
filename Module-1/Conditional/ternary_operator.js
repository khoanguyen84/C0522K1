var n1 = 9;
var n2 = 16;
var n3 = 18;

// if(n1 > n2){
//     console.log("n1 max");
// }
// else{
//     console.log("n2 max");
// }

// (n1 > n2) ? console.log("n1 max") : console.log("n2 max");

// if(n1 > n2 && n1 > n3){
//     console.log("n1 max");
// }
// else{
//     if(n2 > n3){
//         console.log("n2 max");
//     }
//     else{
//         console.log("n3 max");
//     }
// }

// (n1 > n2 && n1 > n3) ? console.log("n1 max") : ((n2 > n3) ? console.log("n2 max") : console.log("n3 max"))
console.log(`${(n1 > n2 && n1 > n3) ? "n1" : (n2 > n3) ? "n2" : "n3"} max`);

var name = "Ngọc";
var gender = false;
var married = true;

// Hello, Mr.Khoa
// if(gender == true){
//     // console.log("Hello, Mr." + name);
//     console.log(`Hello, Mr.${name}`);
// }
// else{
//     if(married == true){
//         console.log(`Hello, Mrs.${name}`);
//     }
//     else{
//         console.log(`Hello, Ms.${name}`);
//     }
// }

// console.log(`Hello, ${gender == true ? "Mr" : (married == true ? "Mrs" : "Ms")}.${name}`);

// (gender == true) ? console.log("Hello, Mr." + name) : console.log("Hello, Ms." + name)

var a = 5;
var b = 7;
var c = 6;
// ax2 + bx + c = 0
// 5x2 + 7x + 6 = 0;
console.log(a + "x2 + " + b + "x + " + c + " = 0");
console.log(`${a}x2 + ${b}x + ${c} = 0`)