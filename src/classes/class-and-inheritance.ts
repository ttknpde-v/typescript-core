class Car {
    private brand:string
    private model:string
    private cost:number
    constructor(brand: string, model: string, cost: number) {
        this.brand = brand;
        this.model = model;
        this.cost = cost;
    }
}

class Salary {
    private salary:number[]
    private dates:string[]
    constructor(salary: number[],dates:string[]) {
        this.salary = salary;
        this.dates = dates;
    }
}
class Employee extends Car { /* Main class */
    private fullname  :string
    private age : number
    private salary : Salary | any
    /*
    Note : When you print object class Ts/Js
    It'll generate method like toString() in java
    , but it's hid
    * */
    constructor(salary:number[],date:string[],brand: string, model: string, cost: number, fullname: string, age: number) {
        super(brand, model, cost);
        this.fullname = fullname;
        this.age = age;
        this.salary = new Salary(salary,date)
    }
}

let dates : string[] = ["2019-10-19","2020-11-30"]
let salary : number[] = [60000,90000]
let em1 = new Employee(salary ,dates ,"Toyota","Yaris",690000,"Peter",30)
/*
console.log(em1)
Employee {
  brand:'Toyota',
  model:'Yaris',
  cost:690000,
  fullname:'Peter',
  age:30,
  salary: Salary {
    salary: [60000,90000],
    dates: ['2019-10-19','2020-11-30']
  }
}
*/

class CarSecond {
    private brand:string
    private model:string
    private cost:number

    constructor(brand: string, model: string, cost: number) {
        this.brand = brand;
        this.model = model;
        this.cost = cost;
    }
    public speed (km : number) {
        console.log(`top speed ${km}km/hour`)
    }
    public color (color : string) {
        console.log(`color is ${color}`)
    }
}

class Honda extends CarSecond{
    constructor(brand: string, model: string, cost: number) {
        super(brand, model, cost);
    }
    /* Override method */
    /*
    # NOTE : You can call any method that you extend by (.)
    public speed(km: number) {
        super.speed(km);
    }
    */
}

let honda= new Honda("Honda","Civic",899000)
let hondaSecond= new Honda("Honda","Civic Rs",998000)

/*
console.log(honda)
honda.speed(270) // called method of subclass [we called : Override]
honda.color("Blue")

console.log(`*\n*\n*\n*`)

console.log(hondaSecond)
hondaSecond.speed(300)
hondaSecond.color("white")
*/
class CarThird {
    private brand:string
    private model:string
    private cost:number

    constructor(brand: string, model: string, cost: number) {
        this.brand = brand;
        this.model = model;
        this.cost = cost;
    }
    public speed (km : number) {
        console.log(`top speed ${km}km/hour`)
    }
    public color (color : string) {
        console.log(`color is ${color}`)
    }
}
class Toyota extends CarThird {
    constructor(brand: string, model: string, cost: number) {
        super(brand, model, cost);
    }
}

/*
let toyota = new Toyota("Toyota","Vios",690000);
let toyotaSecond = new Toyota("Toyota","Cross",1190000);
console.log(toyota)
toyota.speed(120)
toyota.color("black")
console.log(toyotaSecond)
*/
// # Generic Key and Value
interface KeyAndValue<T,U> {
    printGeneric(key: T, value: U): void
}

class KeyAndValueProcess implements KeyAndValue<any, any>{
    printGeneric(key: any, value: any): void {
        console.log(`key = ${key}, value = ${value}`)
    }
}
let brand : string[] = ["Toyota" , "Honda" , " Ford"]
/*new KeyAndValueProcess().printGeneric("Car",brand)*/


