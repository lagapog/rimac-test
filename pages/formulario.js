import { useContext } from 'react'
import Container from 'components/layout/Container'
import FormContainer from 'components/form/FormContainer'
import { Store } from 'store/reducer'
import { useRouter } from 'next/router'

const Form = () => {
  const router = useRouter()
  const { state } = useContext(Store)
  if (!state.user.id && typeof window !== 'undefined') {
    router.push('/')
  }
  return (
    <Container>
      <FormContainer />
    </Container>
  )
}

Form.getInitialProps = ctx => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/' })
    ctx.res.end()
  }
  return { }
}

export default Form
