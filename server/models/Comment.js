'use strict'



const db = require('../../data/dbConfig')



 class Comment{

    static async create(comment_fields){
        if (
           process.env.NODE_ENV === "production" 
         ){
           const [ids] = await db("comments").insert(
              {
                user_email: comment_fields.email,   
                user_name: comment_fields.name, 
                comment_text: comment_fields.comment_text,       
              },
              ["id"]
            );
      
            const new_car = await db("comments")
              .where({ id: ids.id })
              .first();
      
            return new_car;
         }else{
           const [id] = await db("comments").insert({
                user_email: comment_fields.email,   
                user_name: comment_fields.name, 
                comment_text: comment_fields.comment_text, 
              
            });
      
            const new_car = await db("comments")
              .where({ id: id })
              .first();
            return new_car;
         }
       
      
      }
   
      static async delete(id, email) {
        return await db("comments").where({ id: id, user_email: email }).del()
      }


      static async getAllPostComments(id){
        return db('comments').where("post_id",id)  
     }


    static async increaseLikes(id){
        return db('comments')
            .where("id", id) 
            .increment('like', 1)
    
        }

    static async decreaseLikes(){
        return db('comments')
            .where("id", id) 
            .decrement('like', 1)
    }

   
 }



 
 /**
 * Export model
 */

module.exports = Comment