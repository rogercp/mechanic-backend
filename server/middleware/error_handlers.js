'use strict'


 function not_found_catch(req,res,next){

        let err = new Error()
        err.status = 404 
        err.message = 'Not Found'

        next(error)
 }

 function server_error_catch(err,req,res,next){

    err.status = err.status || 500
    err.message = err.message || 'Internal Server Error'

    res.status(err.status).json({
        error :{
            status: err.status,
            message: err.message
        }
    })
 }

 
module.exports = [not_found_catch, server_error_catch]
