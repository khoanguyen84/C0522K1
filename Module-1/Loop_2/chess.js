const size = 8;
let chess = "<table border='1'>";
chess += "<tbody>";
for(let row = 1; row <= size; row++){
    chess += "<tr>";
    for(let cell = 1; cell <= size ; cell ++){
        if(row % 2 != 0){
            if(cell % 2 != 0){
                chess += `<td class='black' onclick='console.log("${row}-${cell}")'></td>`;
            }
            else{
                chess += `<td class='white' onclick='console.log("${row}-${cell}")'></td>`;
            }
        }
        else{
            if(cell % 2 != 0){
                chess += `<td class='white' onclick='console.log("${row}-${cell}")'></td>`;
            }
            else{
                chess += `<td class='black' onclick='console.log("${row}-${cell}")'></td>`;
            }
        }
    }
    chess += "</tr>";
}
chess += "</tbody>";
chess += "</table>";
document.write(chess);

// const size = 8;
// let chess = "<table border='1'>";
// chess += "<tbody>";
// for(let row = 1; row <= size; row++){
//     chess += "<tr>";
//     for(let cell = 1; cell <= size ; cell ++){
//         chess += "<td></td>";
//     }
//     chess += "</tr>";
// }
// chess += "</tbody>";
// chess += "</table>";

// document.write(chess);