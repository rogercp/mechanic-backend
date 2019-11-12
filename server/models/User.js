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
    console.log("hittin 4")
    console.log( user, "create")
   
    if(process.env.NODE_ENV == 'production'){
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
          })
          return id
    }

 }


 static async create2(user_fields) {
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "staging"
    ) {
      const [ids] = await db("users").insert(
        {
          email: user_fields.email,
          uid: user_fields.email,
         
        },
        ["id"]
      );

      const new_case = await db("users")
        .where({ id: ids.id })
        .first();

      return new_case;
    } else {
      const [id] = await db("users").insert({
        email: user_fields.email,
        uid: user_fields.email,
       
      });

      const new_case = await db("users")
        .where({ id: id })
        .first();
      return new_case;
    }
  }

 }
 /**
 * Export model
 */

module.exports = User