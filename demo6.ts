let id: number | string
id=101
id = "abc"


type Person={
    name:string
}

type Employee={
    salary:string
}

type Developer = Person & Employee

const dev :Developer={
    name:"raj",
    salary:"50000"
}