import logObj from "../log/my-log-second";

/* Learn about collections Typescript */
let days_second : Array<string> = ["monday","tuesday","wednesday"]
// logObj.log.silly(days_second)
/*  map is an object that stores a key-value pair. */
let map_days = new Map<number,string>()
map_days.set(1,"monday")
map_days.set(2,"tuesday")
/*
retrieve a value by loop forEach
map_days.forEach(value => {
    console.log(value)
})
*/
class User {
    protected username:string
    protected password:string
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

let map_users = new Map<number,User>
map_users.set(1,new User("peter","12345"))
map_users.set(2,new User("mark","12345"))
/*
console.log(map_users)
Map(2) {
1=> User { username:'peter', password:'12345'},
2=> User { username:'mark', password:'12345'}
}
*/

let set_user = new Set<User>()
set_user.add(new User("peter","12345"))
// console.log(set_user)

/*
Set(2) {
  User { username:'peter', password:'12345'},
  User { username:'mark', password:'12345'}
}
*/