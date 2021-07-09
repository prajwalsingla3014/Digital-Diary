/** @format */

import { Box } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/about/About'
import Header from './components/Header'
import Home from './components/home/Home'
import CreateView from './components/post/CreateView'
import DetailView from './components/post/DetailView'
import UpdateView from './components/post/UpdateView'
import ContextProvider from './context/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 64 }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id" component={DetailView} />
            <Route path="/create" component={CreateView} />
            <Route path="/update/:id" component={UpdateView} />
            <Route path="/about" component={About} />
          </Switch>
        </Box>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
