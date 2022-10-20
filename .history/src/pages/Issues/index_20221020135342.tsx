import { DescriptionContenteStyled, HeaderDescriptionStyled, IssuesContainerStyled } from "./styles";
import IconGithubArrow from '../../assets/arrow-up-right-from-square-solid.svg'
import GithubBrands from '../../assets/github-brands.svg'
import { useContext, useEffect, useState } from 'react'
import { CalendarBlank, CaretLeft, ChatCircle } from "phosphor-react";
import { NavLink, useParams } from "react-router-dom";
import { GitBlogContext, IssuesProps } from "../../context/ContextApi";
import ReactMarkdown from "react-markdown";
import showdown from "showdown"
import remarkGfm from 'remark-gfm'

interface UserProps {
  name: string;
  followers: number;
  login: string;
  bio: string;
  html_url: string;
  comments: number;
}

interface issuesParmsProps {
  data: IssuesProps;
}


export function IssuesPost() {
  const [issuesParms, setIssuesParms] = useState<any[]>([])
  console.log(issuesParms)
  const [users, setUsers] = useState<UserProps>()
  const { issues } = useContext(GitBlogContext)
  
  let { userId } = useParams();


  const filterIssuesForId = async () => {
    const data = issues.filter(issue => issue.id === Number(userId))
    setIssuesParms(data)
  }

  const apitGit = async () => {
    fetch('https://api.github.com/users/viniciusfg05') //rota possivelmente criariamos no futuro
      .then(response => response.json())
      .then(data => setUsers(data)) //console .log nos dados
  }

  useEffect(() => {
    apitGit()
    filterIssuesForId()
  }, [])

  var converter = new showdown.Converter
  var text = '# hello, markdown!';
  var html = converter.makeHtml(text);


  return (
    <IssuesContainerStyled>
      <DescriptionContenteStyled>
        <HeaderDescriptionStyled>
          <header>
            <section>
              <NavLink to="/" title="">
                <CaretLeft color="#3294F8" size={18} />
                <span>Voltar</span>
              </NavLink>
              <a href={users?.html_url} target="_blank">
                <span>VER NO GITHUB</span>
                <img src={IconGithubArrow} alt="Arrow up right from square solid" />
              </a>
            </section>

            <h1>JavaScript data types and data structures</h1>

            <footer>
              <ul>
                <li>
                  <img src={GithubBrands} alt="Github Brands" />
                  <p>{users?.login}</p>
                </li>

                <li>
                  <CalendarBlank color="#3A536B" weight="fill" size={18} />
                  <p>Há 1 dia</p>
                </li>

                <li>
                  <ChatCircle color="#3A536B" weight="fill" size={18} />
                  <p>{`comentários`}</p>
                </li>
              </ul>
            </footer>
          </header>
        </HeaderDescriptionStyled>
      </DescriptionContenteStyled>

      {issuesParms.map(issuesParms => (
        converter.makeHtml(issuesParms.body)


        <ReactMarkdown children={
          issuesParms.body
        } remarkPlugins={[remarkGfm]}/>
      ))}

    </IssuesContainerStyled>
  )
}