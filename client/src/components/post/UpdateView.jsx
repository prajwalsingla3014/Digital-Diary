/** @format */

import {
  Box,
  InputBase,
  makeStyles,
  FormControl,
  Button,
  TextareaAutosize,
} from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { getPost, updatePost } from '../../service/api'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '20px 100px',
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },
  image: {
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  textfield: {
    flex: 1,
    margin: '0 30px',
    fontSize: 25,
  },
  textarea: {
    width: '100%',
    marginTop: 30,
    border: 'none',
    fontSize: 18,
    '&:focus-visible': {
      outline: 'none',
    },
  },
}))

const initialValues = {
  title: '',
  description: '',
  picture: '',
  username: 'prajwalsingla',
  categories: 'All',
  createdDate: new Date(),
}

const UpdateView = ({ match }) => {
  const classes = useStyles()
  const history = useHistory()
  const url =
    'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

  const [post, setPost] = useState(initialValues)

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id)

      setPost(data)
    }
    fetchData()
  }, [match])

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const updateBlog = async () => {
    await updatePost(match.params.id, post)
    history.push(`/details/${match.params.id}`)
  }

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="banner" />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" style={{ color: '#388e3c' }} />
        <InputBase
          value={post.title}
          name="title"
          onChange={(e) => handleChange(e)}
          placeholder="Add Title..."
          className={classes.textfield}
        />
        <Button
          onClick={() => updateBlog()}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        value={post.description}
        name="description"
        onChange={(e) => handleChange(e)}
        rowsMin={5}
        placeholder="Tell your story ..."
        className={classes.textarea}
      />
    </Box>
  )
}

export default UpdateView
