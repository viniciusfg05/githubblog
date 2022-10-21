import styled from "styled-components";

export const SearchContainerStyled = styled.form`
    width: 54rem;
    margin: 4.5rem auto 0 auto;
    font-family: "Nunito", sans-serif;

    input {
        width: 100%;
        height: 3.125rem;
        background: ${props => props.theme["base-input"]};
        border: 0;
        margin-top: 0.70rem;
        color: ${props => props.theme["base-span"]};
        padding: 0.75rem;

        ::placeholder {
            font-size: 1rem;
        }
    }
`
export const SearchHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.125rem;
    }

    p {
        font-size: 0.875rem;
        color: ${props => props.theme["base-span"]};
    }

`