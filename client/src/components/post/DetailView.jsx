/** @format */

import { Box, makeStyles, Typography } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getPost, deletePost } from '../../service/api'
import { LoginContext } from '../../context/ContextProvider'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '20px 100px',
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10px',
    },
  },
  image: {
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: '35vh',
      width: '100%',
      objectFit: 'cover',
    },
  },
  icons: {
    float: 'right',
  },
  icon: {
    margin: 5,
    border: '1px solid #878787',
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: 'center',
    margin: '50px 0 10px 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  subheading: {
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

const DetailView = ({ match }) => {
  const classes = useStyles()
  const history = useHistory()

  // eslint-disable-next-line
  const { account, setAccount } = useContext(LoginContext)
  const url =
    'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

  const [post, setPost] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id)

      setPost(data)
    }
    fetchData()
  }, [match])

  const deleteBlog = async () => {
    await deletePost(post._id)
    history.push('/')
  }

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={post.picture || url} alt="banner" />
      {post.username === account ? (
        <Box className={classes.icons}>
          <Link to={`/update/${post._id}`}>
            <Edit className={classes.icon} color="primary" />
          </Link>
          <Delete
            onClick={() => deleteBlog()}
            className={classes.icon}
            color="error"
          />
        </Box>
      ) : (
        <Box></Box>
      )}
      <Typography className={classes.heading}>{post.title}</Typography>
      <Box className={classes.subheading}>
        <Link to={`/?username=${post.username}`} className={classes.link}>
          <Typography>
            Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: 'auto' }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Box>
      <Typography>{post.description}</Typography>
    </Box>
  )
}

export default DetailView
