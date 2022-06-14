// 1. Số học: + , - , * , /, %, ** (sử dụng cho số, kết quả trả về là số)
// 2. So sách: > , < , ==, ===,>=, <=, !=, !== (sử dụng để so sánh, kết quả trả về là true/false)
// 3. Logic: &&, ||, ! (kết hợp nhiều biểu thức so sánh, kết quả trả về là true/false)
// 4. Gán: =, +=, -+, *=,/=, %=, **=, ++, -- (thay đổi giá trị của biến, biểu thức)
// 5. Nối chuỗi: + (nối các chuỗi lại thành 1 chuỗi, kết quả quả về là 1 chuỗi)
// 6. typeof 

// console.log(5 == "5")   // true     | false | false
// console.log(5 === "5")  // false    | fasse | true

// console.log(5 != "5")   // false    | false
// 5 có khác 5 hay ko? => ko
// console.log(5 !== "5")  // true     | false
// 5 có khác 5 không? (false) hoặc number có khác string không? (true) => true

// var number = 5;
// number = number + 7; -> number += 7;
// number = number + 1; -> number += 1; -> number ++;
// number = number - 1; -> number -= 1; -> number --;

// --number vs number--;
// ++number vs number++;

// var number = 5;
// ++number == 5; -> tăng number lên 1 đơn vị, sau đó so sánh với 5
// number++ == 5; -> number so sánh với 5, rồi number tăng lên 1

// console.log(1 + 2 + "3" + 4 + 5) // 339 | "3" | "3345" | 3345 | null | 312
// 3 + "3" + 4 + 5
// "33" + 4 + 5
// "334" + 5
// "3345"

console.log(2 + "2");    // "22"
console.log(2 - "2");    // NaN | Underfined | 0
console.log(2 * "2");    // NaN | Underfined | 4

console.log(1 + "a"); // "1a"
console.log(1 - 'a'); // "NaN"

console.log(5**2);