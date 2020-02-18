'use strict'

const db = require('../../data/dbConfig')


 class Post{

    static async create(post_fields){
        if (
           process.env.NODE_ENV === "production" 
         ){
           const [ids] = await db("posts").insert(
              {
                user_id:post_fields.user_id,
                user_name:post_fields.displayName,
                category: post_fields.category,
                post_text: post_fields.post_text,
                post_date:post_fields.post_date
              },
              ["id"]
            );
      
            const new_car = await db("posts")
              .where({ id: ids.id })
              .first();
      
            return new_car;
         }else{
           const [id] = await db("posts").insert({
            user_id:post_fields.user_id,
            user_name:post_fields.displayName,
            category: post_fields.category,
            post_text: post_fields.post_text,
            post_date:post_fields.post_date  
            });
      
            const new_car = await db("posts")
              .where({ id: id })
              .first();
            return new_car;
         }
       
      }
   
      static async delete(id, email) {
        return await db("posts").where({ id: id, user_email: email }).del()
      }


      static async allUserPosts(email){
   
        if(email){
           return db('posts').where("user_email", email);
  
        }else{
           return db("posts");
        }
      
     }

     static async all(){

        return db('posts').join('users','posts.user_id','=','users.id')
     
    }


  //  static async all(){

  //     return db('posts')
    
  // }
   


    static async increaseLikes(id){
        return db('posts')
            .where("id", id) 
            .increment('like', 1)
    
        }

    static async decreaseLikes(){
        return db('posts')
            .where("id", id) 
            .decrement('like', 1)
    }
    

  

   
 }



 
 /**
 * Export model
 */

module.exports = Post