class Student{

    //no var let const
    //uname:string ="amit"
    uname:string;
    age:number
    public school:string="DPS"
    private fees:number=23000
    protected marks:number=100
    readonly schoolid:number=101
    static city:string="Ahmedabad"
    //const x:number = 100

    // constructor(){
    //     //this.uname="raj"
    //     this.age=23
    // }

    constructor(uname:string,age:number){
        this.uname = uname
        this.age = age
    }

    display(){
        console.log("username = ",this.uname)
        console.log("age = ",this.age)
        console.log("fees = ",this.fees)
        console.log("marks = ",this.marks)
        //this.schoolid = 1001 read ...
    }

    getageaftergivenyeasr(year:number):number{
        return this.age + year
    }
    static getStatus(){
        console.log("status")
    }
}

class SubStudent extends Student{

    subdisplay(){
        //console.log(this.fees) //private
        console.log(this.marks)
    }
}


//creating an object of class
const student1 = new Student("raj",23)
const student2 = new Student("parth",24)

student1.display()
student2.display()
console.log(student1.getageaftergivenyeasr(23))
console.log(student1.school)
console.log(student1.age)
//console.log(student1.marks) //procted no access out of class ---> it can access from child class

//console.log(student1.fees) // private no access
console.log(Student.city) // static prop
console.log(Student.getStatus())