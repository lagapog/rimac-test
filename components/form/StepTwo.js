import { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DoneIcon from '@material-ui/icons/Done'
import CustomTabs from 'components/form/CustomTabs'
import BackIcon from 'components/icons/BackIcon'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const BackButton = withStyles(theme => ({
  root: {
    color: '#A3ABCC',
    fontSize: 12,
    marginBottom: theme.spacing(3)
  },
  startIcon: {
    marginRight: theme.spacing(2),
    color: 'transparent'
  }
}))(Button)

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: 100,
    paddingBottom: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  container: {
    width: '100%',
    maxWidth: 700,
    '&__title': {
      fontSize: 40,
      fontWeight: 400,
      color: '#494F66',
      marginBottom: theme.spacing(1)
    },
    '&__text': {
      fontSize: 16,
      fontFamily: 'Roboto',
      fontWeight: 500,
      color: '#676F8F',
      marginBottom: theme.spacing(4)
    }
  },
  form: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 260px',
    columnGap: theme.spacing(8),
    '&__resume': {
      width: '100%',
      '&__card': {
        width: '100%',
        height: 180,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        marginBottom: theme.spacing(8.5),
        borderRadius: 12,
        border: '3px solid #F0F2FA',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',
        '&__license': {
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 12,
          color: '#A3ABCC'
        },
        '&__brand': {
          fontWeight: 400,
          fontSize: 20,
          color: '#494F66',
          width: 200,
          marginBottom: theme.spacing(2)
        },
        '&__edit': {
          fontWeight: 700,
          fontSize: 12,
          color: theme.palette.secondary.main,
          textTransform: 'uppercase',
          cursor: 'pointer'
        },
        '&__image': {
          position: 'absolute',
          right: 10,
          bottom: 2,
          height: 185
        }
      },
      '&__tabs': {
        width: '100%',
        '&__title': {
          fontSize: 20,
          fontWeight: 400,
          color: '#494F66'
        }
      }
    },
    '&__chart': {
      width: '100%',
      '&__title': {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 50px',
        paddingBottom: theme.spacing(2),
        borderBottom: '1px solid #E4E8F7',
        marginBottom: theme.spacing(2),
        '& p': {
          fontWeight: 400,
          fontSize: 28,
          color: '#494F66'
        },
        '& span': {
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 12,
          color: '#676F8F'
        },
        '& img': {
          gridRow: '1 / 3',
          gridColumn: '2 / 3'
        }
      },
      '&__items': {
        width: '100%',
        '&__title': {
          fontSize: 16,
          fontWeight: 400,
          color: '#494F66'
        },
        '&__icon': {
          fontSize: 14,
          color: '#43B748'
        },
        '&__text': {
          fontFamily: 'Roboto',
          fontSize: 14,
          fontWeight: 400,
          color: '#676F8F'
        }
      },
      '&__button': {
        marginTop: theme.spacing(5),
        height: 56,
        width: '100%',
        fontWeight: 700,
        fontSize: 14,
        borderRadius: 8
      }
    }
  }
}))

const StepTwo = ({ setActiveStep, data, handleChange }) => {
  const classes = useStyles()
  const router = useRouter()
  const [total, setTotal] = useState(20)
  useEffect(() => {
    let amount = 20
    if (data.partialTheft) amount += 15
    if (data.carAccident) amount += 20
    if (data.totalLoss) amount += 50
    setTotal(amount)
  }, [data])
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <BackButton
          startIcon={<BackIcon />}
          onClick={() => setActiveStep(0)}
        >
          Volver
        </BackButton>
        <Typography className={`${classes.container}__title`}>
          Mira las coberturas
        </Typography>
        <Typography className={`${classes.container}__text`}>
          Conoce las coberturas para tu plan
        </Typography>
        <div className={classes.form}>
          <div className={`${classes.form}__resume`}>
            <div className={`${classes.form}__resume__card`}>
              <Typography className={`${classes.form}__resume__card__license`}>
                Placa: C2U-114
              </Typography>
              <Typography className={`${classes.form}__resume__card__brand`}>
                {`${data.brand} ${data.year}`}
              </Typography>
              <Typography
                onClick={() => setActiveStep(0)}
                className={`${classes.form}__resume__card__edit`}
              >
                editar
              </Typography>
              <img src='/guy-resume.svg' className={`${classes.form}__resume__card__image`} />
            </div>
            <div className={`${classes.form}__resume__tabs`}>
              <Typography className={`${classes.form}__resume__tabs__title`}>
                Agrega o quita coberturas
              </Typography>
              <CustomTabs
                data={data}
                handleAdd={handleChange}
              />
            </div>
          </div>
          <div className={`${classes.form}__chart`}>
            <div className={`${classes.form}__chart__title`}>
              <Typography>
                {`$${total.toFixed(2)}`}
              </Typography>
              <Typography component='span'>
                mensuales
              </Typography>
              <img src='/flex.svg' className={`${classes.form}__help__body__image`} />
            </div>
            <div className={`${classes.form}__chart__items`}>
              <Typography className={`${classes.form}__chart__items_title`}>
                El precio incluye:
              </Typography>
              <List>
                {data.partialTheft &&
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <DoneIcon className={`${classes.form}__chart__items__icon`} />
                    </ListItemIcon>
                    <ListItemText
                      primary='Robo parcial'
                      className={`${classes.form}__chart__items__text`}
                    />
                  </ListItem>}
                {data.carAccident &&
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <DoneIcon className={`${classes.form}__chart__items__icon`} />
                    </ListItemIcon>
                    <ListItemText
                      primary='Choque y/o accidente'
                      className={`${classes.form}__chart__items__text`}
                    />
                  </ListItem>}
                {data.totalLoss &&
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <DoneIcon className={`${classes.form}__chart__items__icon`} />
                    </ListItemIcon>
                    <ListItemText
                      primary='Pérdida total'
                      className={`${classes.form}__chart__items__text`}
                    />
                  </ListItem>}
              </List>
            </div>
            <Button
              variant='contained'
              color='primary'
              disableElevation
              className={`${classes.form}__chart__button`}
              onClick={() => router.push('/')}
            >
              Lo Quiero
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

StepTwo.propTypes = {
  setActiveStep: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default StepTwo
