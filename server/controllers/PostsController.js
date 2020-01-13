'use strict'


const Post = require('../models/Post')
/**
 * Define controller
 */

class PostsController{

   
  static async allUserPosts(req, res) {
    try {
      const posts = await Post.allUserPosts(req.body.email);

      return res.status(200).json(posts);
    } catch (err) {
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }

  static async allPosts(req, res) {
    try {
      const posts = await Post.all();

      return res.status(200).json(posts);
    } catch (err) {
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }
 
    static async create(req, res) {
    
        try{
          
          const post = await Post.create(req.body,req.params);
    
          res.status(201).json(post);
        }catch(err){
          return res
          .status(500)
          .json({ error: { message: "Internal Server Error" } });
        }
        }

    static async delete(req, res) {
            try {
              await Post.delete(req.params.id, req.body.email);
        
              return res.status(200).json({ message: "Successfully deleted post" });
            } catch (err) {
              return res.status(500).json({ error: { message: "Internal Server Error" } });
            }
          }
       
}
  
  /**
   * Export controller
   */

   module.exports = PostsController
  