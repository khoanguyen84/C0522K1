class Student{
    constructor(fullname){
        this.fullname = fullname;
    }
    getFN(){
        return this.fullname;
    }
    // setFN(newName){
    //     this.fullname = newName;
    // }
}

Student.prototype.setFN = function(newName){
    this.fullname = newName;
}

Student.prototype.age = 19;

Student.prototype.getAge = function(){
    return this.age
}
let nhat = new Student("Nhật");
nhat.setFN("Nhật Quốc")
console.log(nhat.getAge());


Array.prototype.sum = function(){

}