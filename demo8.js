var Student = /** @class */ (function () {
    // constructor(){
    //     //this.uname="raj"
    //     this.age=23
    // }
    function Student(uname, age) {
        this.school = "DPS";
        this.uname = uname;
        this.age = age;
    }
    Student.prototype.display = function () {
        console.log("username = ", this.uname);
        console.log("age = ", this.age);
    };
    Student.prototype.getageaftergivenyeasr = function (year) {
        return this.age + year;
    };
    return Student;
}());
//creating an object of class
var student1 = new Student("raj", 23);
var student2 = new Student("parth", 24);
student1.display();
student2.display();
console.log(student1.getageaftergivenyeasr(23));
console.log(student1.school);
console.log(student1.age);
