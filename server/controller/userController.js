/** @format */

import User from '../models/userModel.js'

export const userLogIn = async (req, res) => {
  try {
    let user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    })
    if (user) {
      return res.status(200).json(`${req.body.username} login successfull`)
    } else {
      return res.status(401).json('Invalid Login')
    }
  } catch (error) {
    res.json('Error: ', error.message)
  }
}

export const userSignUp = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username })
    if (exist) {
      return res.status(401).messagejson({ message: 'User already exists' })
    }
    const user = req.body
    const newuser = new User(user)
    await newuser.save()
    res.status(200).json(`${user.name} has been successfully registered`)
  } catch (error) {
    res.json('Error: ', error.message)
  }
}
