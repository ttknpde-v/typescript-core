/*
   before use require() in ts file
   just install
   npm install @types/node (can use require('<name module>'))
*/
class MyLog {
    private get winston() {
        const {createLogger , format , transports} = require('winston')
        return {createLogger , format , transports}
    }
    public get log() {
        const path : any = require('path')
        // @ts-ignore
        return this.winston.createLogger({
            level : 'silly' ,
            format : this.winston.format.
            combine(
                this.winston.format.label({label : path.basename(process.mainModule?.filename)}) ,
                this.winston.format.timestamp({format : 'YYYY-MM-DD HH:mm:ss'}) ,
                this.winston.format.printf((info:any) => `${info.timestamp} ${info.level} [${info.label}] : ${info.message}`)
            ) ,
            transports : [ new this.winston.transports.Console ]
        })
    }
}

const myLog = new MyLog()
/* way to export attribute / method only */
export default myLog.log