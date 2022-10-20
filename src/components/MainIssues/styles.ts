import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const IssuesContainerStyled = styled.section`
    width: 54rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 3rem;
`

export const IssuesContentStyled = styled(NavLink)`
    background: ${props => props.theme["base-post"]};
    padding: 2rem;
    border-radius: 10px;
`
export const IssuesHeaderStyled = styled.div`
    display: flex;
    margin-bottom: 1.25rem;
    justify-content: space-between;
    gap: 1rem;

        
        
    h3 {
        color: ${props => props.theme["base-title"]};
        font-size: 1.25rem;
        font-weight: 700;
    }
    
    p { 
        min-width: 3.3125rem;
        color: ${props => props.theme["base-span"]};
        font-size: 0.875rem;
    }
`
export const MainIssuesStyled = styled.div`

    P {
        color: ${props => props.theme["base-text"]};
    }
`
