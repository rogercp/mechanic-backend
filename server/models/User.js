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
        if(process.env.NODE_ENV == 'production' || process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'staging2' ){
            console.log("in")
            const [ids] = await db('users').insert({
                email: user.email,
                uid: user.uid,
              },['id'])
        return ids.id
    } else{
        console.log("hittin 5")
        console.log(email,"email")
        console.log(uid,"uid")
        const [id] = await db('users').insert({
            email: user.email,
            uid: user.uid,
          })
          console.log(id,"id")
          return id
    }

 }
 }
 /**
 * Export model
 */

module.exports = User