import myLog from "../log/my-log";
import myLogSecond from "../log/my-log-second";
import {Car , Student , ResponseObj } from "../classes/class-and-interface";
import {Axis , AxisSecond} from "../classes/class-and-interface";
import {hello , squareArea , checkType , read ,printArgument , printArguments } from "../functions/any-functions";
// myLog.info('test')
// console.log(Car) // [class Car]
let toyota = new Car('Toyota','Yaris',2020)
/*
console.log(toyota)
toyota.setBrand('Alphard')
console.log(toyota.getBrand())
*/
let student1 = new Student('xx53Ds',false,'peter parker')
let student2 = new Student('xx53Ds',true,'json ryder')
/*
student2.printValue()
student1.password = '666ASxRsaA'
student1.status = true
student1.printValue()
*/
let responseObj : ResponseObj<Student>= new ResponseObj()
/*
responseObj.printValue() // undefined
responseObj.setObject(student1)
responseObj.printValue()
*/

const point : Axis = {
    x : 1 ,
    y : 1 ,
    printPoint() : string {
        return `x is ${this.x}\ny is ${this.y}`;
    }
}
const pointSecond : AxisSecond = {
    x: [1,2,3,5],
    y: "y = {-1 , 0}",
    z: 3,
    printPoint(x: number, y: number, z: number): void {
        console.log(`(${x},${y},${z})`)
    }
}

/*
console.log(point.printPoint())
console.log(pointSecond.x)
console.log(pointSecond.y)
pointSecond.printPoint(1,2,3)
*/
/*
# Test overloading
console.log(hello('beer',true))
console.log(hello('beer',2020))
console.log(hello(false,60.60))
*/

/*
console.log(`base 5 cm height 5 cm area is ${squareArea(5,5)} m^2`)
*/

/*
console.log(checkType('A')+' & '+checkType(true)+' & '+ checkType(0))
*/

let read_result= read()
/*
# Test return async func/method
read_result.then((result) => {
    console.log(result.name)
    console.log(result.age)
    console.log(result.status)
})
*/

/*
printArgument(`5 ? 5 = ${5*5}`)
printArguments("Hello Guys","Peter","Mark","Martin")
printArguments("Hello Guys")
*/

