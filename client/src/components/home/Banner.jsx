/** @format */

import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  image: {
    background: `url(${'https://images.pexels.com/photos/414548/pexels-photo-414548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}) center/35% repeat-x #000`,
    width: '100%',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& :first-child': {
      fontSize: 65,
      fontFamily: 'Great Vibes, cursive',
      color: '#FFFFFF',
      lineHeight: 1,
    },
    '& :last-child': {
      fontSize: 38,
      fontFamily: 'Great Vibes, cursive',
      color: '#FFFFFF',
    },
  },
})

const Banner = () => {
  const classes = useStyles()

  return (
    <Box className={classes.image}>
      <Typography>Digital</Typography>
      <Typography>Diary</Typography>
    </Box>
  )
}

export default Banner
