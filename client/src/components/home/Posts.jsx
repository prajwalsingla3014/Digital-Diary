/** @format */

import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'

const Posts = () => {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return posts.map((post) => (
    <Grid item xs={12} sm={4} lg={3}>
      <Link
        to={'/details'}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Post />
      </Link>
    </Grid>
  ))
}

export default Posts
