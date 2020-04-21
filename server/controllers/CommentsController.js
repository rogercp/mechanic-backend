'use strict'


const Comment = require('../models/Comment')

class CommentController {


  static async allPostsComments(req, res) {
    try {
      const comments = await Comment.getAllPostComments(req.params.id);

      return res.status(200).json(comments);
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

  static async createComment(req, res) {

    try {

      const comment = await Comment.create(req.body, req.params);


      res.status(201).json(comment);
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

  static async deleteComment(req, res) {
    try {
      await Comment.delete(req.params.id, req.body.email);

      return res.status(200).json({
        message: "Successfully deleted comment"
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
    try {

      await Comment.increaseLikes(req.params.id);

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
    try {

      await Comment.decreaseLikes(req.params.id);

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

module.exports = CommentController