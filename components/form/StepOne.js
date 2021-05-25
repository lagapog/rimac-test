import { makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import RangeInput from 'components/form/RangeInput'
import BackIcon from 'components/icons/BackIcon'
import DropdownIcon from 'components/icons/DropdownIcon'
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
      marginBottom: theme.spacing(1),
      '& span': {
        color: theme.palette.primary.main
      }
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
    '&__select': {
      marginBottom: theme.spacing(2)
    },
    '&__radiogroup': {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: theme.spacing(5),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5),
      borderBottom: '1px solid #E4E8F7',
      '&__control': {
        marginLeft: theme.spacing(4),
        marginRight: 0,
        '& .MuiRadio-colorSecondary.Mui-checked': {
          color: '#43B748'
        }
      },
      '&__label': {
        fontWeight: 400,
        fontSize: 16,
        color: '#494F66',
        marginRight: 'auto'
      }
    },
    '&__rangegroup': {
      display: 'grid',
      gridTemplateColumns: 'auto 45%',
      columnGap: theme.spacing(3),
      '&__label': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        '&__text': {
          fontWeight: 400,
          fontSize: 16,
          color: '#494F66',
          gridColumn: '1 / 3'
        },
        '&__helper': {
          fontSize: 12,
          color: '#676F8F',
          '&:nth-of-type(2)': {
            position: 'relative',
            '&:after': {
              content: "''",
              height: 16,
              width: 1,
              background: '#E4E8F7',
              position: 'absolute',
              right: 8
            }
          }
        }
      }
    },
    '&__button': {
      marginTop: theme.spacing(5),
      height: 56,
      width: 190,
      fontWeight: 700,
      fontSize: 14,
      borderRadius: 8,
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
    '&__help': {
      width: '100%',
      '&__title': {
        fontWeight: 700,
        fontSize: 12,
        color: '#494F66',
        paddingBottom: theme.spacing(2),
        borderBottom: '1px solid #E4E8F7',
        marginBottom: theme.spacing(2)
      },
      '&__body': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&__text': {
          fontSize: 16,
          fontWeight: 400,
          color: '#494F66',
          width: 120,
          marginBottom: theme.spacing(2)
        }
      },
      '&__cta': {
        color: theme.palette.secondary.main,
        fontWeight: 700,
        fontSize: 10,
        textTransform: 'uppercase',
        cursor: 'pointer'
      }
    }
  }
}))

const StepOne = ({ setActiveStep, data, handleChange }) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <BackButton
          startIcon={<BackIcon />}
          onClick={() => router.push('/')}
        >
          Volver
        </BackButton>
        <Typography className={`${classes.container}__title`}>
          ¡Hola, <span>Juan!</span>
        </Typography>
        <Typography className={`${classes.container}__text`}>
          Completa los datos de tu auto
        </Typography>
        <div className={classes.form}>
          <div>
            <TextField
              value={data.year}
              onChange={ev => handleChange('year', ev.target.value)}
              label='Año'
              variant='outlined'
              select
              fullWidth
              SelectProps={{ IconComponent: DropdownIcon }}
              className={`${classes.form}__select`}
            >
              <MenuItem value='2013'>2013</MenuItem>
              <MenuItem value='2014'>2014</MenuItem>
              <MenuItem value='2015'>2015</MenuItem>
              <MenuItem value='2016'>2016</MenuItem>
              <MenuItem value='2017'>2017</MenuItem>
              <MenuItem value='2018'>2018</MenuItem>
              <MenuItem value='2019'>2019</MenuItem>
              <MenuItem value='2020'>2020</MenuItem>
            </TextField>
            <TextField
              value={data.brand}
              onChange={ev => handleChange('brand', ev.target.value)}
              label='Marca'
              variant='outlined'
              select
              fullWidth
              SelectProps={{ IconComponent: DropdownIcon }}
              className={`${classes.form}__select`}
            >
              <MenuItem value='Wolkswagen'>Wolkswagen</MenuItem>
              <MenuItem value='Toyota'>Toyota</MenuItem>
              <MenuItem value='Ford'>Ford</MenuItem>
              <MenuItem value='BMW'>BMW</MenuItem>
            </TextField>
            <div className={`${classes.form}__radiogroup`}>
              <Typography className={`${classes.form}__radiogroup__label`}>
                ¿Tu auto es a gas?
              </Typography>
              <FormControlLabel
                value='Sí'
                className={`${classes.form}__radiogroup__control`}
                control={<Radio checked={data.gas} onChange={ev => handleChange('gas', true)} />}
                label='Sí'
              />
              <FormControlLabel
                value='No'
                className={`${classes.form}__radiogroup__control`}
                control={<Radio checked={!data.gas} onChange={ev => handleChange('gas', false)} />}
                label='No'
              />
            </div>
            <div className={`${classes.form}__rangegroup`}>
              <div className={`${classes.form}__rangegroup__label`}>
                <Typography className={`${classes.form}__rangegroup__label__text`}>
                  Indica la suma asegurada
                </Typography>
                <Typography className={`${classes.form}__rangegroup__label__helper`}>
                  MIN $12,500
                </Typography>
                <Typography className={`${classes.form}__rangegroup__label__helper`}>
                  MAX $16,500
                </Typography>
              </div>
              <RangeInput
                min={12500}
                max={16500}
                value={data.price}
                onChange={(value) => handleChange('price', value)}
              />
            </div>
            <Button
              variant='contained'
              color='primary'
              disableElevation
              className={`${classes.form}__button`}
              onClick={() => setActiveStep(1)}
            >
              Continuar
              <ChevronRightIcon />
            </Button>
          </div>
          <div className={`${classes.form}__help`}>
            <Typography className={`${classes.form}__help__title`}>
              AYUDA
            </Typography>
            <div className={`${classes.form}__help__body`}>
              <Typography className={`${classes.form}__help__body__text`}>
                ¿No encuentras el modelo?
              </Typography>
              <img src='/car.svg' />
            </div>
            <Typography className={`${classes.form}__help__cta`}>
              clic aquí
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

StepOne.propTypes = {
  setActiveStep: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default StepOne
