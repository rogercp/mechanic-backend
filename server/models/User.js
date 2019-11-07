'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

 class User{

    static all(){
        return db('users')
    }

    static getUserById(id){
        return db('user').where('id',id).first()
    }

    static getUserByEmail(email){
        return db('users').where('email',email).first()
    }

    static async create(user){
    console.log("hittin 4")
    console.log( user, "create")
   
    if(process.env.NODE_ENV == 'development'){
            console.log("in")
            const [ids] = await db('users').insert({
                email: user.email,
                uid: user.uid,
              },['id'])
        return ids.id
    } else{
        console.log("hittin 5")
        console.log(user.email,"email")
        console.log(user.uid,"uid")
        const [id] = await db('users').insert({
            email: user.email,
            uid: user.uid,
          },['id'])
          console.log(id,"id")
          return id
    }

 }
 }
 /**
 * Export model
 */

module.exports = User