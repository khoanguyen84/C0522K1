var month = 12;
// switch(month){
//     case 1: {
//         console.log("31 days");
//         break;
//     }
//     case 2: {
//         console.log("28 or 29 days");
//         break;
//     }
//     case 3: {
//         console.log("31 days");
//         break;
//     }
//     case 4: {
//         console.log("30 days");
//         break;
//     }
//     case 5: {
//         console.log("31 days");
//         break;
//     }
//     case 6: {
//         console.log("30 days");
//         break;
//     }
//     case 7: {
//         console.log("31 days");
//         break;
//     }
//     case 8: {
//         console.log("31 days");
//         break;
//     }
//     case 9: {
//         console.log("30 days");
//         break;
//     }
//     case 10: {
//         console.log("31 days");
//         break;
//     }
//     case 11: {
//         console.log("30 days");
//         break;
//     }
//     case 12: {
//         console.log("31 days");
//         break;
//     }
//     default:{
//         console.log("invalid month!")
//     }
// }
switch(month){
    case 1: 
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12: 
    {
        console.log("31 days");
        break;
    }
    case 2: {
        console.log("28 or 29 days");
        break;
    }
    case 4: 
    case 6: 
    case 9: 
    case 11: 
    {
        console.log("30 days");
        break;
    }
    default:{
        console.log("invalid month!")
    }
}