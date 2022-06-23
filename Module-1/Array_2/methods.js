let numbers = [1, 4, 5, 6, 4, 3, 3, 6, 7, 4, 23, 3];
let numbers_2 = [1, 4, 5, 6, 4, 3, 3, 6, 7, 4, 23, 3];

// let str = "";
// for(let i = 0; i < numbers.length; i++){
//     if(i < numbers.length - 1){
//         str += `${numbers[i]};`;
//     }
//     else{
//         str += `${numbers[i]}`;
//     }
// }

// let str = "";
// for(let number of numbers){
//     str += `${number},`;
// }
// console.log(str.substring(0, str.length - 1));

// let str2 = "";
// for(let i = 0; i < numbers_2.length; i++){
//     if(i < numbers_2.length - 1){
//         str2 += `${numbers_2[i]}+`;
//     }
//     else{
//         str2 += `${numbers_2[i]}`;
//     }
// }   

// console.log(str);
// console.log(str2);

// console.log(numbers.join(";"))
// console.log(numbers_2.join("+"))
// console.log(numbers.toString())
// console.log(numbers.join(";")) //parameter/agrument

// for..in
// for..of
// forEach

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }   

// for(let index in numbers){
//     console.log(numbers[index]);
// }


// for(let number of numbers){
//     console.log(number)
// }

numbers.forEach(function(number, index){
    console.log(`${index}-${number}`);
})

