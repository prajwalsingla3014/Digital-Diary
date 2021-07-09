/** @format */

import { makeStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { PowerSettingsNew } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
  component: {
    marginTop: 40,
  },
  logout: {
    marginLeft: 20,
    fontSize: 16,
  },
  usertext: {
    fontSize: 18,
    fontFamily: 'Noto Sans HK, sans-serif',
    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
      fontWeight: 700,
    },
  },
}))

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyle()

  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const logout = () => {
    setAccount('')
  }
  return (
    <>
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        onClick={handleClick}
      >
        <Typography className={classes.usertext}>{account}</Typography>
      </Link>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            logout()
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Profile
