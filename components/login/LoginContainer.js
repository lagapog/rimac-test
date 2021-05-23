import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import LoginForm from 'components/login/LoginForm'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '600px 1fr',
    height: '100vh',
    minHeight: 750,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      gridTemplateColumns: '100%'
    }
  },
  banner: {
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/banner-bg.svg")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ECF0FF',
    display: 'grid',
    gridTemplateRows: '380px 1fr',
    justifyItems: 'center',
    [theme.breakpoints.down('sm')]: {
      gridTemplateRows: 'auto',
      backgroundImage: 'unset',
      backgroundColor: '#F7F8FC',
      position: 'relative'
    },
    '&__image': {
      width: 350,
      alignSelf: 'end',
      marginRight: -80,
      [theme.breakpoints.down('sm')]: {
        backgroundImage: 'unset',
        position: 'absolute',
        marginRight: 0,
        bottom: -25,
        right: 0,
        width: 120
      }
    },
    '&__info': {
      width: 300,
      height: '100%',
      maxHeight: 400,
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(4),
        paddingRight: 100
      },
      '&__small': {
        fontWeight: 700,
        fontSize: 12,
        color: '#494F66',
        paddingLeft: theme.spacing(2),
        marginBottom: theme.spacing(0.5),
        [theme.breakpoints.down('sm')]: {
          paddingLeft: 0,
          fontSize: 10,
          marginBottom: theme.spacing(1)
        }
      },
      '&__title': {
        fontWeight: 400,
        fontSize: 36,
        color: '#494F66',
        paddingLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          paddingLeft: 0,
          fontSize: 28,
          '& > span:first-of-type': { color: 'inherit' }
        },
        '& span': { color: theme.palette.primary.main }
      },
      '&__text': {
        color: '#676F8F',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '24px',
        paddingLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          paddingLeft: 0,
          maxWidth: 200
        }
      },
      '&__footer': {
        color: '#A3ABCC',
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: 12,
        marginTop: 'auto',
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      }
    }
  }
}))

const LoginContainer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <Hidden smDown>
          <img className={`${classes.banner}__image`} src='/banner-image.svg' />
        </Hidden>
        <Hidden mdUp>
          <img className={`${classes.banner}__image`} src='/banner-image-mobile.svg' />
        </Hidden>
        <div className={`${classes.banner}__info`}>
          <Typography component='small' className={`${classes.banner}__info__small`}>
            ¡NUEVO!
          </Typography>
          <Typography className={`${classes.banner}__info__title`}>
            Seguro <span>Vehicular</span> <span>Tracking</span>
          </Typography>
          <Typography className={`${classes.banner}__info__text`}>
            Cuentanos donde le haras seguimiento a tu seguro
          </Typography>
          <Typography className={`${classes.banner}__info__footer`}>
            © 2021 RIMAC Seguros y Reaseguros.
          </Typography>
        </div>
      </div>
      <LoginForm />
    </div>
  )
}

export default LoginContainer
