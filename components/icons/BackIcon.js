import SvgIcon from '@material-ui/core/SvgIcon'

const BackIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <circle cx='12' cy='12' r='11.5' transform='rotate(-180 12 12)' stroke='#FC606B' />
      <path fillRule='evenodd' clipRule='evenodd' d='M14.0601 8.42905C13.8133 8.19032 13.4175 8.19032 13.1707 8.42905L9.93988 11.5541C9.6867 11.7989 9.6867 12.2011 9.93988 12.4459L13.1707 15.5709C13.4175 15.8097 13.8133 15.8097 14.0601 15.5709C14.3133 15.3261 14.3133 14.9239 14.0601 14.6791L11.2904 12L14.0601 9.32095C14.3133 9.07606 14.3133 8.67394 14.0601 8.42905Z' fill='#EF3340' />
    </SvgIcon>
  )
}

export default BackIcon
