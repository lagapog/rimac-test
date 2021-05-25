import { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import CustomTabItem from 'components/form/CustomTabItem'
import PropTypes from 'prop-types'

const CustomTab = withStyles(theme => ({
  root: {
    fontWeight: 700,
    fontSize: 10,
    paddingBottom: theme.spacing(3)
  },
  wrapper: {
    width: 80
  }
}))(Tab)

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  tabs: {
    width: '100%',
    marginTop: theme.spacing(3)
  }
}))

const CustomTabs = ({ data, handleAdd }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        className={classes.tabs}
        variant='fullWidth'
      >
        <CustomTab label='Protege a tu auto' />
        <CustomTab label='Protege a los que te rodeaN' />
        <CustomTab label='mejora tu plan' />
      </Tabs>
      <CustomTabItem
        title='Llanta robada'
        imageSrc='/item-1.svg'
        value={data.partialTheft}
        handleAdd={value => handleAdd('partialTheft', value)}
      />
      <CustomTabItem
        title='Choque y/o pasarte la luz roja '
        imageSrc='/item-2.svg'
        value={data.carAccident}
        handleAdd={value => handleAdd('carAccident', value)}
      />
      <CustomTabItem
        title='Atropello en la vía Evitamiento'
        imageSrc='/item-3.svg'
        value={data.totalLoss}
        handleAdd={value => handleAdd('totalLoss', value)}
      />
    </div>
  )
}

CustomTabs.propTypes = {
  data: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired
}

export default CustomTabs
