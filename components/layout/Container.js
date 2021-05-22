import Header from 'components/layout/Header'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
