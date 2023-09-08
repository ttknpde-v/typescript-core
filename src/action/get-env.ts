let path : any = require('path')
let dotenv : any = require('dotenv')
dotenv.config({ path : path.resolve('../env/.env')})
/*
# Note when you don't know exactly type (just use any)
console.log(process.env.SQL_HOST)
*/
