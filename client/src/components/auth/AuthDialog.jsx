/** @format */

import React, { useState, useEffect } from 'react'
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import { authenticateLogin, authenticateSignup } from '../../service/api'

const useStyles = makeStyles((theme) => ({
  component: {
    height: 'auto',
    width: 280,
    padding: 40,
    [theme.breakpoints.down('xs')]: {
      padding: 20,
      width: 220,
    },
  },
  avatarStyle: {
    background: '#1bbd7e',
  },
  btnstyle: {
    margin: '20px 0',
  },
  createText: {
    textAlign: 'center',
    color: '#2874f0',
    fontWeight: 600,
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
  },
  error: {
    fontSize: 10,
    color: '#ff6161',
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600,
  },
}))

const loginInitialValues = {
  username: '',
  password: '',
}

const signupInitialValues = {
  name: '',
  username: '',
  email: '',
  password: '',
}

const accountInitialValues = {
  login: {
    view: 'login',
  },
  signup: {
    view: 'signup',
  },
}

const AuthDialog = ({ open, setOpen, setAccount }) => {
  const classes = useStyles()

  const [login, setLogin] = useState(loginInitialValues)
  const [signup, setSignup] = useState(signupInitialValues)
  const [error, showError] = useState(false)
  const [account, toggleAccount] = useState(accountInitialValues.login)

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login)
    if (!response) showError(true)
    else {
      showError(false)
      handleClose()
      localStorage.setItem('userInfo', JSON.stringify(login.username))
      const user = localStorage.getItem('userInfo')
      const userinfo = JSON.parse(user)
      setAccount(userinfo)
    }
  }

  const signupUser = async () => {
    let response = await authenticateSignup(signup)
    if (!response) return
    handleClose()
    localStorage.setItem('userInfo', JSON.stringify(signup.username))
    const user = localStorage.getItem('userInfo')
    const userinfo = JSON.parse(user)
    setAccount(userinfo)
  }

  const handleClose = () => {
    setOpen(false)
    toggleAccount(accountInitialValues.login)
  }

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup)
  }

  useEffect(() => {
    showError(false)
  }, [login])

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="">
      <DialogContent className={classes.component}>
        {account.view === 'login' ? (
          <Grid>
            <Grid align="center">
              <Avatar className={classes.avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            <TextField
              label="Username"
              name="username"
              placeholder="Enter username"
              onChange={(e) => onValueChange(e)}
              fullWidth
              required
            />
            {error && (
              <Typography className={classes.error}>
                Please enter valid username
              </Typography>
            )}
            <TextField
              label="Password"
              name="password"
              placeholder="Enter password"
              onChange={(e) => onValueChange(e)}
              type="password"
              fullWidth
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.btnstyle}
              onClick={() => loginUser()}
              fullWidth
            >
              Sign in
            </Button>
            <Typography
              className={classes.createText}
              onClick={() => toggleSignup()}
            >
              Do you have an account ? Sign Up
            </Typography>
          </Grid>
        ) : (
          <Grid>
            <Grid align="center">
              <Avatar className={classes.avatarStyle}>
                <AddCircleOutlineOutlinedIcon />
              </Avatar>
              <h2 className={classes.headerStyle}>Sign Up</h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to create an account !
              </Typography>
            </Grid>
            <TextField
              fullWidth
              label="Name"
              name="name"
              onChange={(e) => onInputChange(e)}
              placeholder="Enter your name"
              required
            />
            <TextField
              fullWidth
              label="Username"
              name="username"
              onChange={(e) => onInputChange(e)}
              placeholder="Enter your username"
              required
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              onChange={(e) => onInputChange(e)}
              placeholder="Enter your email"
              required
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              onChange={(e) => onInputChange(e)}
              required
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.btnstyle}
              fullWidth
              onClick={() => signupUser()}
            >
              Sign up
            </Button>
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
