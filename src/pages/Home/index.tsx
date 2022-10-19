

import { DescriptionStyled, HeaderDescriptionStyled, HomeConteinerStyled, DescriptionContenteStyled } from './styles'
import { SearchForm } from '../../components/SearchForm'
import { MainIssues } from '../../components/MainIssues'
import { useContext, useEffect } from 'react'
import { Octokit } from "octokit";
import { Description } from '../../components/Description';
import { GitBlogContext } from '../../context/ContextApi';

export function Home() {


    return (
        <HomeConteinerStyled>

            <Description />
            
            <SearchForm />

            <MainIssues />

        </HomeConteinerStyled>
    )
}