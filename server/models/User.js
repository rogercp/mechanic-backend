'use strict'



const db = require('../../data/dbConfig')



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

 static createUserImage(update,id) {

    let paramX = parseInt(id)
    return  db('users').where("id",paramX).update(update)
    
  }

  static fetchUserImage(user_id){
    return db("users")
      .where("id", user_id)
  }


  static deleteUserImage(id){
      console.log(id)
    return db("users")
      .where("file_name_profile", id).del()
  }

 static async deactivate(id,email) {

      return await db("users").where({ id: id, email: email }).del()
    
  }



 }
 /**
 * Export model
 */

module.exports = User