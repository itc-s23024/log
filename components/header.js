import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import style from 'styles/header.module.css'

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={style.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header
