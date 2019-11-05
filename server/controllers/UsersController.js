'use strict'

/**
 * Dependencies
 */

const moment = require('moment')
const User = require('../models/User')

/**
 * Define controller
 */

 class UsersController{

    static async index(req,res){
       

        try{
            const users = await User.all()
            res.status(200).json(users)
            
        }catch(err){
            res.status(500).json({error:{message:"Internal Service Error "}})
        }

    }

    static async auth(req,res){

        try{

            const user = {
                email:req.body.email,
                uid:req.body.uid,
            }

            let foundUser = await User.getUserByEmail(user.email)

            if(foundUser){
                releaseEvents.status(200).json(foundUser)
            }else{
                const id = await User.create(user)

                foundUser = await User.getUserById(id)

                res.status(200).json(foundUser)
            }


        }catch(err){
            res.status(500).json({error: { message: 'Internal Server Error' }})
        }
    }

 }


/**
 * Export controller
 */

module.exports = UsersController