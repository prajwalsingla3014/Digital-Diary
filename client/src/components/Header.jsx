/** @format */

import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  component: {
    background: '#FFF',
    color: 'black',
  },
  container: {
    justifyContent: 'center',
    '& > *': {
      padding: 20,
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link className={classes.link} to="/">
          <Typography style={{ fontFamily: 'Noto Sans HK, sans-serif' }}>
            HOME
          </Typography>
        </Link>
        <Typography style={{ fontFamily: 'Noto Sans HK, sans-serif' }}>
          ABOUT
        </Typography>
        <Typography style={{ fontFamily: 'Noto Sans HK, sans-serif' }}>
          CONTACT
        </Typography>
        <Typography style={{ fontFamily: 'Noto Sans HK, sans-serif' }}>
          LOGIN
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
