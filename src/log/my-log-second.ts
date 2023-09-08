// @ts-ignore
const path : any = require('path')
const {createLogger , format , transports} = require('winston')
const logObj = {
    log : createLogger({
        level : 'silly' ,
        format : format.
        combine(
            format.label({label : path.basename(<string>process.mainModule?.filename)}) ,
            format.timestamp({format : 'YYYY-MM-DD HH:mm:ss'}) ,
            format.printf((info:any) => `${info.timestamp} ${info.level} [${info.label}] : ${info.message}`)
        ) ,
        transports : [ new transports.Console ]
    })
}
export default logObj