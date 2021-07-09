/** @format */

import React from 'react'
import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { items } from '../../constants/data'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  create: {
    margin: 20,
    background: '#41B6F9',
    color: '#FFF',
    width: '86%',
    '&:hover': {
      background: '#41B6F9',
    },
  },
  table: {
    border: '1px solid rgba(224,224,224,1)',
    margin: '0 10px 0 10px',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      width: '100%',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

const Categories = () => {
  const classes = useStyles()
  return (
    <>
      <Link to="/create" className={classes.link}>
        <Button variant="contained" className={classes.create}>
          Create Blog
        </Button>
      </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to={'/'} className={classes.link}>
                All Categories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((category) => (
            <TableRow>
              <TableCell>
                <Link to={`/?category=${category}`} className={classes.link}>
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default Categories
