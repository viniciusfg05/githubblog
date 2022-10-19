import styled from "styled-components";

export const IssuesContainerStyled = styled.div`

`
export const DescriptionContenteStyled = styled.div`
    width: 54rem;
    height: 13.25rem;
    margin: 0 auto;
    background: ${props => props.theme["base-profile"]};
    padding: 2.5rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const HeaderDescriptionStyled = styled.div`
    display: flex;

    header {
        margin-left: 2rem  ;
        width: 100%;
        
        section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: 'Nunito', sans-serif;
            font-weight: 700;
            align-items: center;

            a {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                span {
                    color: ${props => props.theme["blue"]};
                }
            }
        }

        footer {
            
            ul {
            margin-top: 1.5rem;
            display: flex;
            gap: 1.5rem;
            
            li {
                display: flex;
                align-items: center;
                align-self: center;

                img {
                    width: 1rem;
                    margin-right: 0.5rem;
                }

                p {
                    font-size: 1rem;
                    align-items: center;
                    color: ${props => props.theme["base-subtitle"]};
                }
            }
        }
    }
    }
`
 
export const DescriptionStyled = styled.div``
