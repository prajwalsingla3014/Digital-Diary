/** @format */

import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  container: {
    height: 350,
    margin: '10px 10px 10px 20px',
    borderRadius: 10,
    border: '1px solid #d3cede',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '& > *': {
      padding: '0 5px 5px 5px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '10px 10px 10px 10px',
    },
  },
  image: {
    height: 150,
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  },
  text: {
    color: '#878787',
    fontSize: 14,
    fontFamily: 'Noto Sans HK, sans-serif',
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Acme, sans-serif',
    textAlign: 'center',
  },
  detail: {
    fontSize: 14,
    wordBreak: 'break-word',
    fontFamily: 'Noto Sans HK, sans-serif',
    textAlign: 'center',
  },
}))

const Post = ({ post }) => {
  const classes = useStyles()
  const url =
    post.picture ||
    'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

  const shortenText = (str,limit) => {
    return str.length > limit ? str.substring(0,limit) + "..." : str
  }

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="wrapper" />
      <Typography className={classes.text}>
        Category: {post.categories}
      </Typography>
      <Typography className={classes.heading}>{shortenText(post.title,30)}</Typography>
      <Typography className={classes.text}>Author: {post.username}</Typography>
      <Typography className={classes.detail}>{shortenText(post.description,100)}</Typography>
    </Box>
  )
}

export default Post
