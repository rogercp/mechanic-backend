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

        // return db('posts')

    // return db.raw(`
    
    // select * FROM users LEFT JOIN posts ON users.id = posts.user_id

    // `)

    return db('users').join('posts', 'users.id', 'posts.user_id')
    }


  
   
  static async allForPostImages(id){

    // return db.raw(`
    
    // select * FROM posts INNER JOIN users ON posts.user_id = users.id 

    // `)

    // return db('users').where( {'id': id }).join('users','posts.user_id','users.id')
   
    // return db('posts').join('users', function() {
    //   this.on('posts.users_id', '=', 'users.id').onIn('posts.id', id)
    // })

    return db('posts').join('users', 'posts.user_id = users.id and posts.id = 3')
}
  

//   static async filterByCategory(){

//     return db.raw(`
    
//     select * FROM posts INNER JOIN users ON posts.user_id = users.id WHERE 

//     `)
  
// }

    static async increaseLikes(id){
        return db('posts')
            .where("id", id) 
            .increment('like', 1)
    
        }

    static async decreaseLikes(id){
        return db('posts')
            .where("id", id) 
            .decrement('like', 1)
    }


    static async fetchPostLikes(id){

      return db.column('like').select().from('posts').where("id",id)
      
    }
    
    static async deletePostImage(id){
      return await db("imagines")
        .where("id", id).del()
    }
  
  

   
 }



 
 /**
 * Export model
 */

module.exports = Post