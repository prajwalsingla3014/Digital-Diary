/** @format */

import React, { useState, useContext } from 'react'
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { LoginContext } from '../context/ContextProvider'
import Profile from './Profile'
import AuthDialog from './auth/AuthDialog'

const useStyles = makeStyles((theme) => ({
  component: {
    background: '#FFF',
    color: 'black',
  },
  container: {
    justifyContent: 'center',
    '& > *': {
      padding: 20,
      [theme.breakpoints.down('xs')]: {
        padding: 10,
      },
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '& > *': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
      },
    },
  },
  loginbtn: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { account, setAccount } = useContext(LoginContext)

  const openLoginDialog = () => {
    setOpen(true)
  }

  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link className={classes.link} to="/">
          <Typography style={{ fontFamily: 'Noto Sans HK, sans-serif' }}>
            HOME
          </Typography>
        </Link>
        <Link className={classes.link} to="/about">
          <Typography style={{ fontFamily: 'Noto Sans HK, sans-serif' }}>
            ABOUT
          </Typography>
        </Link>
        <Link className={classes.link} to="/contact">
          <Typography style={{ fontFamily: 'Noto Sans HK, sans-serif' }}>
            CONTACT
          </Typography>
        </Link>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <Link className={classes.link}>
            <Button onClick={() => openLoginDialog()}>
              {' '}
              <Typography
                className={classes.loginbtn}
                style={{ fontFamily: 'Noto Sans HK, sans-serif' }}
              >
                LOGIN
              </Typography>
            </Button>
          </Link>
        )}
        <AuthDialog open={open} setOpen={setOpen} setAccount={setAccount} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
