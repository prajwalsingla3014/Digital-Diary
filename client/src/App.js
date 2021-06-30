/** @format */

import { Box } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/home/Home'
import CreateView from './components/post/CreateView'
import DetailView from './components/post/DetailView'
import UpdateView from './components/post/UpdateView'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" component={DetailView} />
          <Route path="/create" component={CreateView} />
          <Route path="/update" component={UpdateView} />
        </Switch>
      </Box>
    </BrowserRouter>
  )
}

export default App
