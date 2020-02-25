'use strict'


const Post = require('../models/Post')
const Pagination = require('../middleware/Pagination');

class PostsController {


  static async allUserPosts(req, res) {
    try {
      const posts = await Post.allUserPosts(req.body.email);

      
      return res.status(200).json(posts);

      return posts;
    } catch (err) {
      return res
        .status(500)
        .json({
          error: {
            message: "Internal Server Error"
          }
        });
    }
  }

  static async allPosts(req, res) {

    try {
    const posts = await Post.all();
    return res.status(200).json(posts);
    } catch (err) {
      return res
        .status(500)
        .json({
          error: {
            message: "Internal Server Error"
          }
        });
    }
  }


  static async filterPosts(req, res) {
    try {

    const posts = await Post.all();

    const filterTerm = req.body.searchTerm

    const filteredPosts=posts.filter((post)=>{
      if(post.post_text.includes(filterTerm))
      return post;
    
    })
      
    return res.status(200).json(filteredPosts);
    } catch (err) {
      return res
        .status(500)
        .json({
          error: {
            message: "Internal Server Error"
          }
        });
    }
  }



  static async create(req, res) {

    try {
      const post = await Post.create(req.body);

      res.status(201).json(post);
    } catch (err) {
      return res
        .status(500)
        .json({
          error: {
            message: "Internal Server Error"
          }
        });
    }
  }

  static async delete(req, res) {
    try {
      await Post.delete(req.params.id, req.body.email);

      return res.status(200).json({
        message: "Successfully deleted post"
      });
    } catch (err) {
      return res.status(500).json({
        error: {
          message: "Internal Server Error"
        }
      });
    }
  }



  static async incrementLikes(req, res) {
    console.log(req.params,"parameters for like")
    try {

      await Post.increaseLikes(req.params.id);

      return res.status(200).json({
        message: "Successfully incremented likes on post"
      });
    } catch (err) {
      return res.status(500).json({
        error: {
          message: "Internal Server Error"
        }
      });
    }
  }

  static async decrementLikes(req, res) {
    console.log(req.params,"parameters for dislike")
    try {

      await Post.decreaseLikes(req.params.id);

      return res.status(200).json({
        message: "Successfully decremented likes on post"
      });
    } catch (err) {
      return res.status(500).json({
        error: {
          message: "Internal Server Error"
        }
      });
    }
  }
}

/**
 * Export controller
 */

module.exports = PostsController