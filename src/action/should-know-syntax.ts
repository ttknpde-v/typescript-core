/*
    Basic write Ts/Js object
*/
// These are array on below
let set_any_type : [string,number,boolean] = [
    'message',
    11121,
    false
]
let set_any_type_second : any = [
    'message',
    11121,
    false
]
set_any_type_second[0]='peter'

let nums : number[] = [
    1,2,3,4,5
]
/*
# Same result
# set_any_type[1]='peter' Error because Type wasn't correct
console.log(set_any_type)
console.log(set_any_type_second)
*/

// These are objects on below
// left key , right value
let obj_cars = {
    c1 : {brand : 'Toyota',year : 2023} ,
    c2 : {brand : 'Ford',year : 2023} ,
    c3 : {brand : 'Nissan',year : 2023} ,
}
// can specify key and type
let obj_cars_second : {c1 : {brand : string , year : number} ,c2 : {brand : string , year : number} , c3 : {brand : string , year : number}} = {
    c1 : {brand : 'Toyota',year : 2023} ,
    c2 : {brand : 'Ford',year : 2023} ,
    c3 : {brand : 'Nissan',year : 2023} ,
}
/*
# Same result
console.log(obj_cars)
console.log(obj_cars_second)
*/

// can define name type
// status is name of type (real type is number)
type status = number
type status_string = string
let create : status, ok : status , accept : status
let create_string : status_string, ok_string : status_string , accept_string : status_string
create = 201
ok = 200
accept = 202
create_string = 'create'
ok_string = 'ok'
accept_string = 'accept'
/*
console.log(`create == ${create}`)
console.log(`${create_string} == ${create}`)
*/

// Enum objects
enum http {
    create = 201,
    ok = 200 , // can be string
    accept = 202 ,
    status_1 = 'true',
    status_0 = 'false',
}
/*
console.log(http.status_0)
*/
