// let m = [ 
//     5,
//     7,
//     8
// ]

// let matrix = [
//   [5, 55, 555],
//   [1, 3, 5, 7, 88, 9, 10],
//   [7, 2, 5, 7, 14, 5]
// ];
// let matrix_2 = [];
// matrix_2[0] = [5, 55, 555];
// matrix_2[1] = [1, 3, 5, 7, 88, 9, 10];
// matrix_2[2] = [7, 2, 5, 7, 14, 5];

// console.log(matrix_2)
// for(let row = 0; row < matrix.length; row ++){
//     for(let cell = 0; cell < matrix[row].length; cell++){
//         console.log(matrix[row][cell]);
//     }
// }
// let row = matrix[0];
// row[1] => 55;

// console.log(matrix[0][1]);
// console.log(matrix[1][4]);
// console.log(matrix[2][4][2]);

let row = 5;
let cell = 7;
let min = 10;
let max = 20;
let matrix = [];
for(let r = 0; r < row; r++){
    let numbers = [];
    for(let c = 0; c < cell; c++){
        numbers[c] = Math.floor(Math.random()*(max - min + 1) + min);
    }
    matrix[r] = numbers;
}

console.log(matrix)