'use strict'



const db = require('../../data/dbConfig')


 class Comment{

    static async create(comment_fields,param_field){
      console.log(comment_fields,param_field,"commentfields")
        if (
           process.env.NODE_ENV === "production" 
         ){
           const [ids] = await db("comments").insert(
              {
                user_id:comment_fields.user_id,  
                comment_text: comment_fields.comment_text,  
                post_id:param_field.id     
              },
              ["id"]
            );
      
            const new_comment = await db("comments")
              .where({ id: ids.id })
              .first();
      
            return new_comment;
         }else{
           const [id] = await db("comments").insert({
                user_id:comment_fields.user_id,  
                comment_text: comment_fields.comment_text, 
                post_id:param_field.id    
            });
      
            const new_comment = await db("comments")
              .where({ id: id })
              .first();
            return new_comment;
         }
       
      
      }
   
      static async delete(id, email) {
        return await db("comments").where({ id: id, user_email: email }).del()
      }


      static async getAllPostComments(id){
        let numX = parseInt(id)
        return db('comments').where("post_id",numX).orderBy('comments.like','desc')
     }


     static async increaseLikes(id){
      return db('comments')
          .where("id", id) 
          .increment('like', 1)
  
      }

  static async decreaseLikes(id){
      return db('comments')
          .where("id", id) 
          .decrement('like', 1)
  }
   
 }



 
 /**
 * Export model
 */

module.exports = Comment