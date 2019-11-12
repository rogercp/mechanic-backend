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
        return db('users').where('id',id).first()
    }

    static getUserByEmail(email){
        return db('users').where('email',email).first()
    }

    static async create(user){
   
   
    if(process.env.NODE_ENV == 'production'){
            
            const [ids] = await db('users').insert({
                email: user.email,
                uid: user.uid,
              },['id'])
        return ids.id
    } else{
        
        const [id] = await db('users').insert({
            email: user.email,
            uid: user.uid,
          })
          return id
    }

 }



 }
 /**
 * Export model
 */

module.exports = User