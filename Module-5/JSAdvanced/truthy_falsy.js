// convert các kiểu dữ liệu khác về kiểu boolean
// trả về false
// 0 -> false
// empty -> false
// null -> false
// undefined -> false
// NaN -> false
let fullname = "";
console.log(fullname || 'no name');

let array = [];

console.log((array.length && array.join(',')) || "empty");