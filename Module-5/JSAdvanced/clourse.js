// clourse = hàm đóng

// Bên ngoài không truy cập vào bên trong hàm để sử dụng biến
// Bên trong hàm có thể truy cập ra phạm vi bên ngoài hàm để sử dụng biến

// function countApp(){
//     var count = 0;
//     function increament(){
//         return ++count;
//     }

//     return increament;
// }

// let app = countApp();
// console.log(app());
// console.log(app());
// console.log(app());

// let app_1 = countApp();
// console.log(app_1());
// console.log(app_1());
// console.log(app_1());


function jobApp(){
    var jobs = ["Lau nhà", "Nấu cơm", "Đón con"];
    return {
        getJobs(){
            return jobs.join("-");
        },
        addJob(jobname){
            jobs.push(jobname)
        }
    }
}

let app = jobApp();
app.addJob("Rửa chén");
var jobs = [];
console.log(app.getJobs());