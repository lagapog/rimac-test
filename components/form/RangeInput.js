import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  disabled: {
    textAlign: 'center',
    color: '#494F66'
  }
}))

const RangeInput = ({ max, min, value, onChange }) => {
  const valueToString = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const classes = useStyles()
  return (
    <TextField
      variant='outlined'
      value={`$ ${valueToString}`}
      fullWidth
      disabled
      InputProps={{
        classes: { disabled: classes.disabled },
        endAdornment: (
          <IconButton
            size='small'
            color='secondary'
            onClick={() => { if (value < max) onChange(value + 100) }}
          >
            <AddIcon />
          </IconButton>
        ),
        startAdornment: (
          <IconButton
            size='small'
            color='secondary'
            onClick={() => { if (value > min) onChange(value - 100) }}
          >
            <RemoveIcon color='secondary' />
          </IconButton>
        )
      }}
    />
  )
}

RangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RangeInput
