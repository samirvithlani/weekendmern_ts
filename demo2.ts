// function add(a:number,b:number):void{
 
//     return a+b
// }

function add(a:number,b:number):number{
 
    return a+b
}
let x:number = add(10,20)
console.log("value of x = ",x)


//optional param
function greet(name:string,age?:number):string{

    return `hello ${name}`
}

greet("amit")

//default param
function greet2(name:string,age:number=18){

}
greet2("jay")

//rest param..
function total(...data:number[]){

}

total(10,20,30,40,50)