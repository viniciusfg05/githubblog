import { DescriptionStyled, HeaderDescriptionStyled, DescriptionContenteStyled } from './styles'
import IconGithubArrow from '../../assets/arrow-up-right-from-square-solid.svg'
import GithubBrands from '../../assets/github-brands.svg'
import buildingSolid from '../../assets/building-solid.svg'
import userGroupSolid from '../../assets/user-group-solid.svg'
import { useEffect, useState } from 'react'


interface UserProps {
    name: string;
    followers: number;
    login: string;
    bio: string;
    html_url: string;
}



export function Description() {
    const [ users, setUsers ] = useState<UserProps>()


    const apitGit = async () => {
        fetch('https://api.github.com/users/viniciusfg05') //rota possivelmente criariamos no futuro
        .then(response => response.json())
        .then(data => setUsers(data)) //console .log nos dados
    }

    useEffect(() => {
        apitGit()
    }, [])


    return (
        <DescriptionContenteStyled>
                <HeaderDescriptionStyled>
                    <img src="https://avatars.githubusercontent.com/u/68232658?v=4" />
                    <header>
                        <section>
                            <h1>{users?.name}</h1>
                            <a href={users?.html_url} target="_blank">
                                <span>GITHUB</span>
                                <img src={IconGithubArrow} alt="Arrow up right from square solid" />
                            </a> 
                        </section>                        
                        <p>{users?.bio}</p>

                        <footer>
                            <ul>
                                <li>
                                    <img src={GithubBrands} alt="Github Brands" />
                                    <p>{users?.login}</p>
                                </li>

                                <li>
                                    <img src={userGroupSolid} alt="Github Brands" />
                                    <p>{users?.followers}</p>
                                </li>
                            </ul>
                        </footer>
                    </header>
                </HeaderDescriptionStyled>
            </DescriptionContenteStyled>
    )
}