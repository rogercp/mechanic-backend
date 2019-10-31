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
        console.log("got here")
        try{

            const users = await User.all
            res.status(200).json(users)
            
        }catch(err){
            res.status(500).json({error:{message:"Internal Service Error "}})
        }

    }

 }


/**
 * Export controller
 */

module.exports = UsersController