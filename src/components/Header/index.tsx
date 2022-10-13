import logo from '../../assets/logo.svg'
import effectright from '../../assets/effect.svg'
import effectleft from '../../assets/effect2.svg'
import { HeaderContainerStyled, HeaderContentStyled } from './styles'

export function Header() {
    return (
        <HeaderContainerStyled>
            <HeaderContentStyled>
                <img src={effectleft} alt="" />
                <img src={logo} alt="" />
                <img src={effectright} alt="" />
            </HeaderContentStyled>
        </HeaderContainerStyled>
    )
}