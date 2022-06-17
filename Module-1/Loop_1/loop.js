// hiển thị các số từ 1 đến 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// let i = 1;
// for (; i <= 10; i++) {
//   console.log(i);
// }
// console.log("i outsite for", i);

// let i = 1
// for (; i <= 10; ) {
//   console.log(i);
//   i++;
// }
// let i = 1;
// for (;;) {
//   if (i > 10) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 10; i++) {
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }
// for (let i = 2; i <= 10; i+=2) {
//     console.log(i);
// }

// for (var i = 1, total = 0; i <= 10 && total <= 20; i++) {
//   total += i;
//   // if(total > 20){
//   //     break;
//   // }
// }
// console.log(total);

for (let i = 1; i <= 10; i++) {
    if(i % 2 != 0){
        continue;
    }
    console.log(i);
}