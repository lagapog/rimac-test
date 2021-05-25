import { useContext } from 'react'
import Container from 'components/layout/Container'
import WellcomeContainer from 'components/wellcome/WellcomeContainer'
import { Store } from 'store/reducer'
import { useRouter } from 'next/router'

const Wellcome = () => {
  const router = useRouter()
  const { state } = useContext(Store)
  if (!state.user.id && typeof window !== 'undefined') {
    router.push('/')
  }
  return (
    <Container>
      <WellcomeContainer email={state.user.email} />
    </Container>
  )
}

Wellcome.getInitialProps = ctx => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/' })
    ctx.res.end()
  }
  return { }
}

export default Wellcome
