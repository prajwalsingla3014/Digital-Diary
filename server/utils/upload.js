/** @format */

import multer from 'multer'
import { GridFsStorage } from 'multer-gridfs-storage'

const storage = new GridFsStorage({
  url: 'mongodb+srv://prajwal123:prajwal123@devconnector.9jlk3.mongodb.net/BLOG?retryWrites=true&w=majority',
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (request, file) => {
    const match = ['image/png', 'image/jpg']

    if (match.indexOf(file.memeType) === -1) {
      return `${Date.now()}-blog-${file.originalname}`
    }
    return {
      bucketName: 'photos',
      fileName: `${Date.now()}-blog-${file.originalname}`,
    }
  },
})

export default multer({ storage })
