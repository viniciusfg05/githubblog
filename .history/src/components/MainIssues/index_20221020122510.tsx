import { useContext } from 'react'
import { GitBlogContext } from '../../context/ContextApi'
import { dateFormatter } from '../Ultils/Formatted'
import { formatDistanceToNow } from 'date-fns'
import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import ptBR from 'date-fns/locale/pt-BR'
import {
  IssuesContainerStyled,
  IssuesContentStyled,
  IssuesHeaderStyled,
  MainIssuesStyled
} from './styles'

export function MainIssues() {
  const { issues } = useContext(GitBlogContext)

  return (
    <IssuesContainerStyled>
      {issues.map(issues => (
        <IssuesContentStyled to={`/issues/${issues.id}`}>  
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
