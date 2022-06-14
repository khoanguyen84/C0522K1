// 1. IF..ELSE
// + if
// + if..else
// + nested (lồng nhau) if else
// + bậc thang
// 2. SWITCH..CASE
// 3. ?:
// giải thích sự khác nhau giữa let, var, const

// xếp loại học lực của học sinh cấp 3, khi biết điểm trung bình
// có đtb (0 <= đtb <= 10)
//  9<= đtb <= 10   => xuất sắc
//  8<= đtb < 9     => giỏi
//  7<= đtb < 8     => khá
//  6<= đtb < 7     => TBK
//  5<= đtb < 6     => trung
//  0<= đtb < 5     => yếu

var dtb = 6.5;

// if(dtb < 0 || dtb > 10){
//     console.log("Điểm không lợp lệ!");
// }
// else{
//     if(dtb >= 9 && dtb <=10){
//         console.log("Xuất sắc")
//     }
//     else{
//         if(dtb >= 8 && dtb < 9){
//             console.log("Giỏi")
//         }
//         else{
//             if(dtb >= 7 && dtb < 8){
//                 console.log("Khá")
//             }
//             else{
//                 if(dtb >= 6 && dtb < 7){
//                     console.log("TBK")
//                 }
//                 else{
//                     if(dtb >=5 && dtb < 6){
//                         console.log("Trung bình")
//                     }
//                     else{
//                         console.log("Yếu")
//                     }
//                 }
//             }
//         }
//     }
// }
// ================================================
// if(dtb < 0 || dtb > 10){
//     console.log("Điểm không lợp lệ!");
// }
// else if(dtb >= 9){
//         console.log("Xuất sắc")
//     }
//     else if(dtb >= 8){
//             console.log("Giỏi")
//         }
//         else if(dtb >= 7){
//                 console.log("Khá")
//             }
//             else if(dtb >= 6){
//                     console.log("TBK")
//                 }
//                 else if(dtb >=5){
//                         console.log("Trung bình")
//                     }
//                     else{
//                         console.log("Yếu")
//                     }

// ================================================
// alt + shift + f
if (dtb < 0 || dtb > 10) {
  console.log("Điểm không lợp lệ!");
}
if (dtb >= 9 && dtb <= 10) {
  console.log("Xuất sắc");
}
if (dtb >= 8 && dtb < 9) {
  console.log("Giỏi");
}
if (dtb >= 7 && dtb < 8) {
  console.log("Khá");
}
if (dtb >= 6 && dtb < 7) {
  console.log("TBK");
}
if (dtb >= 5 && dtb < 6) {
  console.log("Trung bình");
}
if (dtb < 5 && dtb >= 0 ) {
  console.log("Yếu");
}
