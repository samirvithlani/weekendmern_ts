class Person{

    constructor(public name:string,public age:number){   
    }
    introduce(){
        console.log(`i am ${this.name}`)
    }
}
class Student extends Person{

        constructor(name:string,age:number,public rollNo:number){
            super(name,age)
        }

}

const ram = new Student("Ram",23,10) //child class
ram.introduce() //parent class