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

    static async indexById(req,res){
       const id = req.params.id
        try{
            const user = await User.getUserById(id)
            res.status(200).json(user)
            
        }catch(err){
            res.status(500).json({error:{message:"Internal Service Error "}})
        }

    }
    static async auth(req,res){
            console.log("hittin 1")
        try{
            console.log(req.body.email,"emailyy")
            console.log(req.body.uid,"uidddd")
            const user = {
                email:req.body.email,
                uid:req.body.uid,
            }

            let foundUser = await User.getUserByEmail(user.email)

            if(foundUser){
                console.log("hittin 2")
                res.status(200).json(foundUser)
            }else{
                console.log("hittin 3")
                const id = await User.create(user)

                foundUser = await User.getUserById(id)
                    console.log(foundUser,"found")
                res.status(200).json(foundUser)
            }


        }catch(err){
            res.status(500).json({error: { message: 'Internal Server Error' }})
        }
    }


    static async create(req, res) {
        try {
          const new_user = await User.create2(req.body);
    
          res.status(201).json(new_user);
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: { message: "Internal Server Error" } });
        }
      }



 }


/**
 * Export controller
 */

module.exports = UsersController