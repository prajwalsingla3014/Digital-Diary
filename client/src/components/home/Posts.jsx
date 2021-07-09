/** @format */

import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getAllPosts } from '../../service/api'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const { search } = useLocation()
  // let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(search)

      setPosts(data)
    }
    fetchData()
  }, [search])

  return posts.map((post) => (
    <Grid item xs={12} sm={6} lg={3}>
      <Link
        to={`/details/${post._id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Post post={post} />
      </Link>
    </Grid>
  ))
}

export default Posts
