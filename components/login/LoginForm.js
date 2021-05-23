import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    maxWidth: 300,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    '&__title': {
      fontWeight: 400,
      fontSize: 28,
      color: '#494F66',
      marginBottom: theme.spacing(3)
    },
    '&__fiedlgroup': {
      width: '100%',
      display: 'flex',
      '&__select': {
        width: 90,
        '& > div': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }
      },
      '&__text': {
        flex: 1,
        '& > div': {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0
        }
      }
    },
    '&__field': {
      marginTop: theme.spacing(2)
    },
    '&__terms': {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: theme.spacing(3),
      '&__checkbox': {
        padding: 0,
        marginRight: theme.spacing(1.5),
        '&.Mui-checked': {
          color: '#43B748'
        }
      },
      '&__label': {
        cursor: 'pointer',
        fontWeight: 300,
        color: '#676F8F',
        fontSize: 12,
        fontFamily: 'Roboto',
        '& a': {
          color: 'inherit'
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
    }
  }
}))

const LoginForm = () => {
  const classes = useStyles()
  const [terms, setTerms] = useState(false)
  const [data, setData] = useState({
    documentType: 'DNI',
    documentNumber: '',
    phone: '',
    licensePlate: ''
  })
  const handleChange = ev => {
    setData(prev => ({ ...prev, [ev.target.name]: ev.target.value }))
  }
  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <Typography className={`${classes.form}__title`}>
          Déjanos tus datos
        </Typography>
        <div className={`${classes.form}__fiedlgroup`}>
          <FormControl
            variant='outlined'
            className={`${classes.form}__fiedlgroup__select`}
          >
            <Select
              name='documentType'
              value={data.documentType}
              onChange={handleChange}
            >
              <MenuItem value='DNI'>DNI</MenuItem>
              <MenuItem value='RUC'>RUC</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant='outlined'
            label='Nro de doc'
            value={data.documentNumber}
            name='documentNumber'
            onChange={handleChange}
            className={`${classes.form}__fiedlgroup__text`}
          />
        </div>
        <TextField
          variant='outlined'
          label='Celular'
          value={data.phone}
          name='phone'
          onChange={handleChange}
          fullWidth
          className={`${classes.form}__field`}
        />
        <TextField
          variant='outlined'
          label='Placa'
          value={data.licensePlate}
          name='licensePlate'
          onChange={handleChange}
          fullWidth
          className={`${classes.form}__field`}
        />
        <div className={`${classes.form}__terms`}>
          <Checkbox
            checked={terms}
            onChange={() => setTerms(prev => !prev)}
            className={`${classes.form}__terms__checkbox`}
          />
          <Typography
            className={`${classes.form}__terms__label`}
            onClick={() => setTerms(prev => !prev)}
          >
            Acepto la <a href='#'>Política de Protecciòn de Datos Personales</a> y los <a href='#'>Términos y Condiciones.</a>
          </Typography>
        </div>
        <Button
          variant='contained'
          color='primary'
          disableElevation
          className={`${classes.form}__button`}
        >
          COTÍZALO
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
