/** @format */

import mongoose from 'mongoose'

const Connection = async (username, password) => {
  const url = `mongodb+srv://${username}:${password}@devconnector.9jlk3.mongodb.net/BLOG?retryWrites=true&w=majority`
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    console.log('Database connected successfully')
  } catch (error) {
    console.log('Error while connecting to database ', error)
  }
}

export default Connection
