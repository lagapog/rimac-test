import Header from 'components/layout/Header'
import PropTypes from 'prop-types'

const Container = ({ children, isLogin = false }) => {
  return (
    <div>
      <Header isLogin={isLogin} />
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isLogin: PropTypes.bool
}

export default Container
