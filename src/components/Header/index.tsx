import logo from '../../assets/logo.svg'
import effectright from '../../assets/effect.svg'
import effectleft from '../../assets/effect2.svg'
import rectangle from '../../assets/rectangle.svg'
import ellipseLeft from '../../assets/ellipseLeft.svg'
import ellipseRight from '../../assets/ellipseRight.svg'
import { EllipseLeftStyled, EllipseRightStyled, HeaderContainerStyled, HeaderContentStyled, RetangunlarEffectStyled } from './styles'

export function Header() {
    return (
        <HeaderContainerStyled>
            <HeaderContentStyled>
                <EllipseLeftStyled src={ellipseLeft} />
                <img src={effectleft} alt="" />
                <img src={logo} alt="" />
                <RetangunlarEffectStyled src={rectangle} />

                <img src={effectright} alt="" />
                <EllipseRightStyled src={ellipseRight} />
            </HeaderContentStyled>
        </HeaderContainerStyled>
    )
}