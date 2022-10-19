import styled from "styled-components";

export const HomeConteinerStyled = styled.div`
    margin-top: -7rem;
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

    > img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }

    header {
        margin-left: 2rem  ;
        
        section {
            width: 100%;
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
        
        > p {
            margin-top: 0.5rem;
            color: ${props => props.theme["base-text"]};
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
