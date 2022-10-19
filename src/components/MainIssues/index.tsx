import { useContext } from "react";
import { GitBlogContext } from "../../context/ContextApi";
import { IssuesContainerStyled, IssuesContentStyled, IssuesHeaderStyled, MainIssuesStyled } from "./styles";

export function MainIssues() {
    const { issues } = useContext(GitBlogContext)

    // const data = {
        
    // }

    // console.log(issues)


    return (
        <IssuesContainerStyled>
            { issues.map(issues => (

            <IssuesContentStyled>
                <IssuesHeaderStyled>
                    <h3>{issues.title}</h3>
                    <p>{issues.created_at}</p>
                </IssuesHeaderStyled>

                <MainIssuesStyled>
                    <p>{issues.body}</p>
                </MainIssuesStyled>
            </IssuesContentStyled>
            )) }

        </IssuesContainerStyled>
    )
}