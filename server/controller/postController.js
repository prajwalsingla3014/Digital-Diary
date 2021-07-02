/** @format */
import Post from '../models/postModel.js'

export const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    post.save()

    res.status(200).json('Blog created successfully')
  } catch (error) {
    res.status(500).json(error)
  }
}
