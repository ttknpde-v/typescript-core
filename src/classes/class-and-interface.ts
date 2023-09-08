/* These classes */
class Car {
    /* readonly means you can't fix value*/
    private brand:string
    private readonly model:string
    private readonly year:number

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    /* setter */
    public setBrand(brand : string) {
        this.brand = brand
    }
    /* getter */
    public getBrand() {
        return this.brand
    }

}
class Student implements CommonUser { /* implement must always include any method/function */
    password: string | number;
    status: boolean | undefined | null;
    username: string;
    constructor(password: string | number, status: boolean | undefined | null, username: string) {
        this.password = password;
        this.status = status;
        this.username = username;
    }
    public printValue () {
        console.log(`username : ${this.username}\npassword : ${this.password}`)
    }
}
class ResponseObj <T> { /* work with generic */
    private object : T | unknown // use unknown , if user can add another type. compiler will not error
    public setObject(object : T | unknown) {
        this.object = object
    }
    public printValue () {
        console.log(this.object)
    }
}
/* These interface object */
interface CommonUser {
    username : string,
    // # can mark type before adding value (if add another type will error)
    password : string | number ,
    status : boolean | undefined | null
}

interface Axis {
    // can define similar java method (mean method prototype)
    x : number ,
    y : number ,
    printPoint : () => string | unknown //  arrow function
    /* when implement -> printPoint() : string { return '' } */
}

interface AxisSecond {
    x : number[] | string ,
    y : number | string ,
    z : number | string ,
    printPoint(x:number,y:number,z:number) : void // normal function
}


export {
    /* export classes */
    Car ,
    Student ,
    ResponseObj ,
    /* export interface */
    Axis , AxisSecond
}