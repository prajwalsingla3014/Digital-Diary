/** @format */

import express from 'express'
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from '../controller/postController.js'
import { getImage, uploadImage } from '../controller/imageController.js'
import upload from '../utils/upload.js'

const router = express.Router()

router.post('/create', createPost)

router.get('/posts', getAllPosts)
router.get('/post/:id', getPost)

router.post('/update/:id', updatePost)
router.delete('/delete/:id', deletePost)

router.post('/file/upload', upload.single('file'), uploadImage)
router.get('/file/:filename', getImage)

export default router
