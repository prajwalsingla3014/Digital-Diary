/** @format */

import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  image: {
    background: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
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
      fontSize: 40,
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
