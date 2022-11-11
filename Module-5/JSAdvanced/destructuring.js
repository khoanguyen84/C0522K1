// let names = ["Kiện", "Trúc", "Nhật"];
// let name_1 = names[0];
// let name_2 = names[1];
// let name_3 = names[2];

// let [name_1, name_2, name_3] = names;

// console.log(name_1, name_2, name_3);

let staff = {
    name : "Huy",
    gender: true,
    age : 18,
    email : "huy@gmail.com",
    getAge: function(){
        return age;
    }
}

// console.log(staff["name"]);
// console.log(staff.name);

let { gender, name,  age, getAge} = staff;

console.log(gender);