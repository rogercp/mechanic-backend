'use strict'

/**
 * Define middleware
 */

 function require_body(keys){
    return (req,res, next) => {
        if(!req.body || Object.keys(req.body).length === 0){
            return res.status(422).json({
                error:{
                    message:"Missing Request Body"
                }
            })
        }
        let missing_keys = keys.filter(key=>{
            if(!Object.keys(req.body).includes(key) || req.body[key].length === 0 ){
                return true
            }else{
               return false
            }
        })
        if(missing_keys.length > 0){
            return res.status(422).json({
                error:{
                    message:`Missing Fields: ${missing_keys.join('')}`
                }
            })
        }
        next()
    }


 }