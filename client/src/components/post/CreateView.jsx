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
import React from 'react'

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

const CreateView = () => {
  const classes = useStyles()
  const url =
    'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="banner" />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" style={{ color: '#388e3c' }} />
        <InputBase placeholder="Add Title..." className={classes.textfield} />
        <Button variant="contained" color="primary">
          Publish
        </Button>
      </FormControl>
      <TextareaAutosize
        rowsMin={5}
        placeholder="Tell your story ..."
        className={classes.textarea}
      />
    </Box>
  )
}

export default CreateView
