import { useContext } from 'react'
import { GitBlogContext } from '../../context/ContextApi'
import { dateFormatter } from '../Ultils/Formatted'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  IssuesContainerStyled,
  IssuesContentStyled,
  IssuesHeaderStyled,
  MainIssuesStyled
} from './styles'

export function MainIssues() {
  const { issues } = useContext(GitBlogContext)

  console.log(issues)

  const response = issues.map(issue => {
    return issue.body
  })

  return (
    <IssuesContainerStyled>
      {issues.map(issues => (
        <IssuesContentStyled >  
          <IssuesHeaderStyled>
            <h3>{issues.title}</h3>
            <p>
              {formatDistanceToNow(new Date(issues.created_at), {
                addSuffix: true,
                locale: ptBR
              })}
            </p>
          </IssuesHeaderStyled>

          <MainIssuesStyled>
            <p>
              {issues.body.slice(0, 200)}
              {'...'}
            </p>
          </MainIssuesStyled>
        </IssuesContentStyled>
      ))}
    </IssuesContainerStyled>
  )
}
