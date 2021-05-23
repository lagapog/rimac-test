import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import PhoneIcon from '@material-ui/icons/Phone'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    '&__text': {
      color: '#676F8F',
      fontFamily: 'Roboto',
      fontSize: 12,
      fontWeight: 400,
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '&__icon': {
      color: theme.palette.secondary.main,
      fontSize: 16,
      marginRight: 2
    },
    '&__number': {
      textDecoration: 'none',
      fontFamily: 'Roboto',
      color: theme.palette.secondary.main,
      fontSize: 14
    }
  }
}))

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <AppBar color='transparent' elevation={0} position='absolute'>
      <Toolbar>
        <Container className={classes.container}>
          <img src='/logo.svg' />
          <div className={classes.contact}>
            <Typography className={`${classes.contact}__text`}>
              ¿Tienes alguna duda?
            </Typography>
            <PhoneIcon className={`${classes.contact}__icon`} />
            <a href='tel:014116001' className={`${classes.contact}__number`}>
              {isMobile ? 'Llámanos' : '(01) 411 6001'}
            </a>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
