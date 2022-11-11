// callback (gọi lại)
// 1. phải là 1 function
// 2. được truyền vào 1 function khác thông qua argument
// 3. phải được gọi (thực thi)

// function useCallback(args){
//     console.log(args(10, 20));
// }

// useCallback(function(n1, n2){
//     return n1 + n2;
// })

// function callback(n1, n2){
//     return n1 + n2;
// }

// useCallback(callback)


// function useCallback(){
//     console.log(callback(10, 20));
// }

// function callback(n1, n2){
//     return n1 + n2;
// }

// useCallback()

let numbers = [3, 4, 5, 6, 6, 7]
let result = numbers.map(function(value){
    return value * 3;
})

// let result = numbers.map(process)

// function process(value){
//     return value * 3;
// }

console.log(result);