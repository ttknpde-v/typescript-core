/*
You can have multiple functions with the same name
but different parameter types and return type.
*/
function hello(name:string , status : boolean):string|null
function hello(name : string,age:number): number|null
function hello(status : boolean,weight:number): string|null
/* 
when you build function like on the lines 
you have to build full function overloading like below 
*/
function hello(v1 : any , v2 : any): any {
    // when using this function
    // it will map correct argument
    return `${v1} and ${v2}`
}
/* Arrow functions */
const squareArea = (base:number , height :number) => {
    return base*height
}
const checkType = (value : string | number | boolean) => {
    if (typeof value === 'string') return 'string'
    else if (typeof value === 'number') return 'number'
    else return 'boolean'
}
const read = async () => {
    return {
        name: 'peter parker',
        age: 22,
        status: true
    }
}
const printArgument = (text:string ) => console.log(text)
const printArguments = (greeting : string , ...name : string[]) => {
    // ...name means you can put name1 , name2 , name3 , nameN
    console.log(`${greeting} ${name.join(",")}`)
}


export {
    /* func */
    hello ,
    /* arrow func*/
    squareArea , checkType ,
    /* async func */
    read ,
    printArgument ,
    printArguments
}

