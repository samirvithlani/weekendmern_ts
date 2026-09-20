let direction : "left" | "right" | "center"
direction = "right"

type Status= "pending"|"approved"|"rejected"

let userStatus:Status="pending"

//enums

enum Role{
    ADMIN=101,
    USER,
    MANAGER
}

let myrole:Role = Role.ADMIN
console.log(myrole)