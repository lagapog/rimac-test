import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import AddIcon from 'components/icons/AddIcon'
import RemoveIcon from 'components/icons/RemoveIcon'
import ClearIcon from '@material-ui/icons/Clear'
import DoneIcon from '@material-ui/icons/Done'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '50px 1fr auto',
    columnGap: 25,
    rowGap: 10,
    alignItems: 'center',
    borderBottom: '1px solid #E4E8F7',
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    '&__title': {
      fontWeight: 400,
      fontSize: 20,
      color: '#494F66'
    },
    '&__button': {
      gridColumn: '2 / 3',
      justifySelf: 'start',
      fontWeight: 700,
      fontSize: 12,
      color: theme.palette.secondary.main,
      '& svg': {
        marginRight: theme.spacing(1.5),
        marginLeft: theme.spacing(-1)
      }
    },
    '&__field': {
      gridColumn: '2 / 3',
      '&__actions': {
        marginTop: theme.spacing(1),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    },
    '&__text': {
      gridColumn: '2 / 3',
      '& p': {
        color: '#676F8F',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14
      }
    }
  }
}))

const CustomTabItem = ({ title, imageSrc, value, handleAdd }) => {
  const classes = useStyles()
  const [adding, setAdding] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const [text, setText] = useState('')
  const clear = () => {
    setAdding(false)
    setText('')
  }
  const add = () => {
    setCollapsed(false)
    setAdding(false)
    handleAdd(text)
    setText('')
  }
  return (
    <div className={classes.root}>
      <img src={imageSrc} />
      <Typography className={`${classes.root}__title`}>
        {title}
      </Typography>
      <IconButton
        size='small'
        color='primary'
        onClick={() => {
          if (value) setCollapsed(prev => !prev)
        }}
      >
        {collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </IconButton>
      {adding
        ? (
          <div className={`${classes.root}__field`}>
            <TextField
              variant='outlined'
              value={text}
              onChange={ev => setText(ev.target.value)}
              size='small'
              fullWidth
              multiline
            />
            <div className={`${classes.root}__field__actions`}>
              <IconButton size='small' onClick={clear}>
                <ClearIcon />
              </IconButton>
              <IconButton size='small' onClick={add}>
                <DoneIcon />
              </IconButton>
            </div>
          </div>
          )
        : (value
            ? (
              <Button
                className={`${classes.root}__button`}
                onClick={() => {
                  setCollapsed(true)
                  handleAdd('')
                }}
              >
                <RemoveIcon />
                Quitar
              </Button>
              )
            : (
              <Button
                className={`${classes.root}__button`}
                onClick={() => setAdding(true)}
              >
                <AddIcon />
                Agregar
              </Button>
              )
          )}
      {value && (
        <Collapse in={!collapsed} className={`${classes.root}__text`}>
          <Typography>{value}</Typography>
        </Collapse>
      )}
    </div>
  )
}

CustomTabItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleAdd: PropTypes.func.isRequired
}

export default CustomTabItem
