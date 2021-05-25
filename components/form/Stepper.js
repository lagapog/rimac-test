import { makeStyles, withStyles } from '@material-ui/core/styles'
import MaterialStepper from '@material-ui/core/Stepper'
import LinearProgress from '@material-ui/core/LinearProgress'
import Step from '@material-ui/core/Step'
import StepConnector from '@material-ui/core/StepConnector'
import StepLabel from '@material-ui/core/StepLabel'
import StepIcon from '@material-ui/core/StepIcon'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Hidden from '@material-ui/core/Hidden'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const CustomStepper = withStyles({
  root: {
    background: 'transparent'
  }
})(MaterialStepper)

const CustomConnector = withStyles({
  line: {
    borderLeftStyle: 'dashed'
  }
})(StepConnector)

const CustomStepIcon = withStyles(theme => ({
  root: {
    color: 'transparent',
    borderRadius: '50%',
    border: '1px solid #C5CBE0'
  },
  text: {
    fill: '#C5CBE0'
  },
  active: {
    '&$root': {
      color: theme.palette.secondary.main,
      border: 0,
      borderRadius: 0
    },
    '& $text': {
      fill: '#fff'
    }
  },
  completed: {
    '&$root': {
      color: theme.palette.secondary.main,
      border: 0,
      borderRadius: 0
    }
  }
}))(StepIcon)

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ECF0FF',
    paddingTop: 100,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#fff',
      borderBottom: '1px solid #F0F2FA',
      paddingTop: `calc(${theme.spacing(1.5)}px + 64px)`,
      paddingBottom: theme.spacing(1.5)
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: `calc(${theme.spacing(1.5)}px + 56px)`
    }
  },
  container: {
    width: 300,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      width: '100%',
      maxWidth: 400
    }
  },
  line: {
    display: 'grid',
    gridTemplateColumns: 'auto auto 1fr',
    gap: theme.spacing(2),
    alignItems: 'center',
    '&__button': {
      border: '1px solid #F0F2FA'
    },
    '&__text': {
      fontWeight: 700,
      fontSize: 10,
      color: '#676F8F'
    },
    '&__progress': {
      height: 8,
      borderRadius: 8
    }
  }
}))

const Stepper = ({ activeStep, setActiveStep }) => {
  const classes = useStyles()
  const router = useRouter()
  const handleBack = () => {
    if (activeStep === 0) {
      router.push('/')
    } else {
      setActiveStep(0)
    }
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Hidden smDown>
          <CustomStepper
            activeStep={activeStep}
            orientation='vertical'
            connector={<CustomConnector />}
          >
            <Step>
              <StepLabel StepIconComponent={CustomStepIcon}>
                Datos del auto
              </StepLabel>
            </Step>
            <Step>
              <StepLabel StepIconComponent={CustomStepIcon}>
                Arma tu plan
              </StepLabel>
            </Step>
          </CustomStepper>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.line}>
            <IconButton
              size='small'
              className={`${classes.line}__button`}
              onClick={handleBack}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Typography className={`${classes.line}__text`}>
              PASO {activeStep + 1} DE 2
            </Typography>
            <LinearProgress
              color='secondary'
              variant='determinate'
              value={((activeStep + 1) / 2) * 100}
              className={`${classes.line}__progress`}
            />
          </div>
        </Hidden>
      </div>
    </div>
  )
}

Stepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired
}

export default Stepper
