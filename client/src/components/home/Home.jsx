/** @format */

import { Grid } from '@material-ui/core'
import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Posts from './Posts'

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item xs={12} sm={2} lg={2}>
          <Categories />
        </Grid>
        <Grid container item xs={12} sm={10} lg={10}>
          <Posts />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
