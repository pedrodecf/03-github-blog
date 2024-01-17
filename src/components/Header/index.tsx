import { HeaderContainer } from './styles'
import effectHeader from '../../assets/effectHeader.svg'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img id="img1" src={effectHeader} alt="" />
      <img id="img2" src={effectHeader} alt="" />
      <Link to={'/'}>
        <img id="logo" src={logo} alt="" />
      </Link>
    </HeaderContainer>
  )
}
