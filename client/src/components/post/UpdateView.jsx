/** @format */

import {
  Box,
  InputBase,
  makeStyles,
  FormControl,
  Button,
  TextareaAutosize,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import React, { useState, useEffect, useContext } from 'react'
import { getPost, updatePost, uploadFile } from '../../service/api'
import { useHistory } from 'react-router-dom'
import { items } from '../../constants/data'
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
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 10,
    },
  },
  textfield: {
    flex: 1,
    margin: '0 30px',
    fontSize: 25,
    [theme.breakpoints.down('xs')]: {
      margin: '0 10px',
      fontSize: 20,
    },
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
  updatebtn: {
    [theme.breakpoints.down('xs')]: {
      width: 80,
      marginRight: 10,
    },
  },
  categoryfield: {
    marginTop: 15,
    width: '15%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

const UpdateView = ({ match }) => {
  const classes = useStyles()
  const history = useHistory()

  // eslint-disable-next-line
  const { account, setAccount } = useContext(LoginContext)

  const [file, setFile] = useState('')

  const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: account,
    categories: '',
    createdDate: new Date(),
  }

  const [post, setPost] = useState(initialValues)

  // eslint-disable-next-line
  const [image, setImage] = useState('')
  const url = post.picture
    ? post.picture
    : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData()
        data.append('name', file.name)
        data.append('file', file)

        const image = await uploadFile(data)
        post.picture = image.data
        setImage(image.data)
      }
    }
    getImage()
  }, [file, post])

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
        <label htmlFor="fileInput">
          <AddCircle fontSize="large" style={{ color: '#388e3c' }} />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputBase
          value={post.title}
          name="title"
          onChange={(e) => handleChange(e)}
          placeholder="Add Title..."
          className={classes.textfield}
        />
        <Button
          className={classes.updatebtn}
          onClick={() => updateBlog()}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </FormControl>
      <Box>
        <Typography
          className={classes.categorytext}
          variant="h6"
          style={{ color: '#A7A7A7', marginTop: 10 }}
        >
          Category
        </Typography>
        <Select
          className={classes.categoryfield}
          variant="outlined"
          name="categories"
          defaultValue="Music"
          onChange={(e) => handleChange(e)}
          label="Category"
        >
          {items.map((category) => (
            <MenuItem value={category}>{category}</MenuItem>
          ))}
        </Select>
      </Box>
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
