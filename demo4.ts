interface Person{
    gender:string
}

interface Student extends Person{
    id:number,
    name:string
}

const stu:Student={
    id:1,
    name:"amit",
    gender:"male"
}

//diff type and interface


interface App{
    version:number,
    uploadedAt:Date,

    checkUpdate():number
}


const whatsapp:App={
    version:1.0,
    uploadedAt:new Date(),
    checkUpdate() {
        return 1.0
    },
}

console.log(whatsapp)
let v:number = whatsapp.checkUpdate()
console.log(v)

enum Role{
    ADMIN=101,
    USER,
    MANAGER
}

//intrface can have enum

interface Uni{
    name:string,
    role:Role
}

let gtu : Uni={
    name:"ld",
    role:Role.MANAGER
}


