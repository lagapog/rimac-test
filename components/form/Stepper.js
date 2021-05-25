import { makeStyles, withStyles } from '@material-ui/core/styles'
import MaterialStepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepConnector from '@material-ui/core/StepConnector'
import StepLabel from '@material-ui/core/StepLabel'
import StepIcon from '@material-ui/core/StepIcon'
import PropTypes from 'prop-types'

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
    justifyContent: 'center'
  },
  container: {
    width: 300
  }
}))

const Stepper = ({ activeStep }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
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
      </div>
    </div>
  )
}

Stepper.propTypes = {
  activeStep: PropTypes.number.isRequired
}

export default Stepper
