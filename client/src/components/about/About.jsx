/** @format */

import { Box, makeStyles, Typography, Link } from '@material-ui/core'
import { GitHub, LinkedIn, Email } from '@material-ui/icons'

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
    width: '100%',
    height: '50vh',
    backgroundPosition: 'left 0px bottom 0px',
    backgroundSize: 'cover',
  },
  wrapper: {
    padding: 20,
    '& > *': {
      marginTop: 50,
    },
  },
  text: {
    color: '#878787',
  },
})

const About = () => {
  const classes = useStyles()
  return (
    <Box>
      <Box className={classes.banner}></Box>
      <Box className={classes.wrapper}>
        <Typography variant="h3">Prajwal Singla</Typography>
        <Typography variant="h5" className={classes.text}>
          I'm a Software Engineer based in India. I've built websites, desktop
          applications and corporate software.
          <br />
          If you are interested, you can view some of my favorite projects here
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/prajwalsingla3014"
              color="inherit"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Box>
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Need something built or simply want to have chat? Reach out to me on
          <Link
            href="https://www.linkedin.com/in/prajwalsingla3014/"
            color="inherit"
            target="_blank"
          >
            <LinkedIn style={{ fontSize: 25, marginLeft: 5 }} />
          </Link>
          or send me an Email
          <Link
            href="mailto:singlaprajwal.99@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email style={{ fontSize: 25, marginLeft: 5 }} />
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  )
}

export default About
