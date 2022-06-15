// var number = 5;
// console.log(number);        // 5
// if(true){
//     var number = 7;
//     console.log(number);    // 7
// }
// console.log(number);        // 7 | 5

// let number = 5;
// console.log(number);        // 5
// if(true){
//     let number = 7;
//     console.log(number);    // 7
// }

// console.log(number);        // 7 | 5


// Scope (phạm vi)
// 1. Global (toàn cục): var
// 2. Local (cục bộ)
// 3. Block code (khối lệnh)
// var number_2 ;
// let number_1 = 5;
// {
//     {
//         // let number_1 = 7;
//         console.log(number_1);
//     }
//     console.log(number_1);
// }

let a = 5;
a = 15;
var b = 7;
b = 17;
const code = "CGH";
// code = "CG Hue"
{
    {
        const code = "CG Hue"
        console.log(code)
    }
}