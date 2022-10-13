import IconGithubArrow from '../../assets/arrow-up-right-from-square-solid.svg'
import GithubBrands from '../../assets/github-brands.svg'
import buildingSolid from '../../assets/building-solid.svg'
import userGroupSolid from '../../assets/user-group-solid.svg'

import { DescriptionStyled, HeaderDescriptionStyled, HomeConteinerStyled, HomeContenteStyled } from './styles'

export function Home() {
    return (
        <HomeConteinerStyled>
            <HomeContenteStyled>
                <HeaderDescriptionStyled>
                    <img src="https://avatars.githubusercontent.com/u/68232658?v=4" />

                    <header>
                        <section>
                            <h1>Cameron Williamson</h1>
                            <a href="#">
                                <span>GITHUB</span>
                                <img src={IconGithubArrow} alt="Arrow up right from square solid" />
                            </a> 
                        </section>                        
                        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                        <footer>
                            <ul>
                                <li>
                                    <img src={GithubBrands} alt="Github Brands" />
                                    <p>vin1ciusfg</p>
                                </li>
                                <li>
                                    <img src={buildingSolid} alt="Github Brands" />
                                    <p>Rocketseat</p>
                                </li>
                                <li>
                                    <img src={userGroupSolid} alt="Github Brands" />
                                    <p>Rocketseat</p>
                                </li>
                            </ul>
                        </footer>
                    </header>
                </HeaderDescriptionStyled>


            </HomeContenteStyled>

        </HomeConteinerStyled>
    )
}