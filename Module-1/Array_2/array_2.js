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
    // let numbers = [];
    matrix[c] = [];
    for(let c = 0; c < cell; c++){
        matrix[r][c] = Math.floor(Math.random()*(max - min + 1) + min);
    }
    // matrix[r] = numbers;
}

console.log(matrix)

// Viết chương trình tạo ra 1 mảng 2 chiều có số dòng là row, số ô trên mỗi dòng là cell
// mảng 2 chiều này được tạo ra bằng cách sinh các số ngẫu nhiên trong khoảng [min, max]
// các giá trị row, cell, min, max được người dùng nhập vào từ bàn phím
// yêu cầu:
// 1. Hiển thị mảng 2 chiều trên
// 2. Đến xem trong mảng 2 chiều trên có bao nhiêu số chẵn
// 3. Đếm xem trong mảng 2 chiều trên có bao nhiêu số nguyên tố
// 4. Tính tổng các giá trị trên đường biên.