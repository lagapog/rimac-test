import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '500px 1fr',
    height: '100vh',
    minHeight: 750,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
      height: 'auto',
      gridTemplateColumns: '100%'
    }
  },
  banner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F7F8FC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 56
    },
    '&__image': {
      width: 350,
      transform: 'translateX(80px)',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        transform: 'translateX(0px)'
      }
    }
  },
  info: {
    justifySelf: 'center',
    width: '100%',
    maxWidth: 500,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    '&__title': {
      fontWeight: 400,
      fontSize: 36,
      color: theme.palette.primary.main,
      lineHeight: '48px',
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        lineHeight: '36px'
      },
      '& span': {
        color: '#494F66'
      }
    },
    '&__text': {
      color: '#676F8F',
      fontWeight: 300,
      fontFamily: 'Roboto',
      fontSize: 16,
      lineHeight: '28px'
    },
    '&__button': {
      marginTop: theme.spacing(5),
      height: 56,
      width: 250,
      fontWeight: 700,
      fontSize: 14,
      borderRadius: 8,
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  }
}))

const WellcomeContainer = ({ email }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <Hidden smDown>
          <img className={`${classes.banner}__image`} src='/wellcome.svg' />
        </Hidden>
        <Hidden mdUp>
          <img className={`${classes.banner}__image`} src='/wellcome-mobile.svg' />
        </Hidden>
      </div>
      <div className={classes.info}>
        <Typography className={`${classes.info}__title`}>
          ¡Te damos la bienvenida! <span>Cuenta con nosotros para proteger tu vehículo</span>
        </Typography>
        <Typography className={`${classes.info}__text`}>
          Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:<br />
          <b>{email}</b>
        </Typography>
        <Button
          variant='contained'
          color='primary'
          disableElevation
          className={`${classes.info}__button`}
        >
          cómo usar mi seguro
        </Button>
      </div>
    </div>
  )
}

export default WellcomeContainer
