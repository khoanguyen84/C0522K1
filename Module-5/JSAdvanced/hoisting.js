// hoisting
// khai báo biến với var
// định hàm Function Declaration

// scope (phạm vi)
// global (toàn cục)
// local (cục bộ)
// block code

// var i;
// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }
// var i = 8;
// console.log(`i outsite for ${i}`);

var i = 8;
{
    console.log(i);
    {
        let i = 9;
        {
            console.log(i);
        }
    }
    console.log(i);
}