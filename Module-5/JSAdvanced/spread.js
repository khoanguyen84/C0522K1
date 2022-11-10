// tham trị pass-by-value: các kiểu dữ liệu number, string, boolean,..
// tham chiếu pass-by-reference: các kiểu object, function, array

// let n1 = 5;
// let n2 = n1;
// n1 = 6;
// console.log(n1);
// console.log(n2);

// let jobs_1 = ["Java", "React", "Angular"]
// let jobs_2 = [...jobs_1, "VueJS"];
// jobs_1[1] = "React JS";
// console.log(jobs_1);
// console.log(jobs_2);

// let staff_1 = {
//     name: "KHoa",
//     gender : true,
//     age : 18
// }

// let staff_2 = {
//     ...staff_1,
//     name: "Nhật",
//     email: "nhat@gmail.com"
// };
// // staff_2.name = "Nhật";

// console.log(staff_1);
// console.log(staff_2);

var sum = (n) => console.log(n*2);
var sum_2 = sum;
var sum = (n) => console.log(n**2);

sum_2(10);
sum(3);