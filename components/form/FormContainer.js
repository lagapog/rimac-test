import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from 'components/form/Stepper'
import StepOne from 'components/form/StepOne'
import StepTwo from 'components/form/StepTwo'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    height: '100vh',
    minHeight: 750,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      gridTemplateColumns: '100%'
    }
  }
}))

const FormContainer = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [data, setData] = useState({
    year: '',
    brand: '',
    gas: false,
    price: 14300,
    partialTheft: '',
    carAccident: '',
    totalLoss: ''
  })
  const handleChange = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }))
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
      {activeStep === 0
        ? (
          <StepOne
            setActiveStep={setActiveStep}
            data={data}
            handleChange={handleChange}
          />
          )
        : (
          <StepTwo
            setActiveStep={setActiveStep}
            data={data}
            handleChange={handleChange}
          />
          )}
    </div>
  )
}

export default FormContainer
