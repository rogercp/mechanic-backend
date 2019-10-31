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
        
    }

 }

 /**
 * Export model
 */

module.exports = User