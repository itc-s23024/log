import Logo from 'components/logo'
import Nav from 'components/nav'
import style from 'styles/header.module.css'

const Header = () => {
  return (
    <header>
      <div className={style.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  )
}

export default Header
