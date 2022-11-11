// this = context (ngữ cảnh)
// if (Array.prototype.sum != 'function') {
//     Array.prototype.sum = function () {
//         let total = 0;
//         for(let i = 0; i < this.length; i++){
//             total += this[i]
//         }
//         return total;
//     }
// }

// let numbers = [1, 5, 5, 3, 3, 5];
// let numbers_2 = [11, 15, 15, 13, 13, 15];
// console.log(numbers.sum())
// console.log(numbers_2.sum())

// đầu vào: callback
// đầu ra: mảng mới 
Array.prototype.map_2 = function(callback){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr[i] = callback(this[i]);
    }
    return newArr;
}


let numbers = [1, 5, 5, 3, 3, 5];
let result = numbers.map_2(mapping);

function mapping(value){
    return value * 2;
}

console.log(result);