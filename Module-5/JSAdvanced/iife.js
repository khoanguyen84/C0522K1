// 1. khai báo/ định nghĩa
// 2. gọi/ sử dụng

// IIFE = Immediately Invoked Function Expression

// function sum(n1, n2) {
//     console.log(n1 + n2);
// }


// sum(5, 8);

let a = 5;

(function (n1, n2) {
    console.log(n1 + n2);
})(5, 8)

