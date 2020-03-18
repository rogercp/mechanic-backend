

const firebase = require("../config/firebase");



 function restricted_access(req,res,next){
    const token = req.get("Authorization") || req.body.token
    

    if (token){
        firebase.auth().verifyIdToken(token)
        .then(decodeToken =>{
            
            req.body.email = decodeToken.email
            req.body.uid = decodeToken.uid
            next()
        })
        .catch(err =>{
            console.error(err)
            res.status(401).json({
                error:{
                    message:"Invalid Authorization"
            }})
        })


    }else{
        res.status(400).json({message : "No token for authorization provided"})
    }

 }
 module.exports = restricted_access
 