import styled from "styled-components";

export const HeaderContainerStyled = styled.header`
    height: 18.5rem;
    `
export const HeaderContentStyled = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        z-index: -99;
    }
`

export const EllipseLeftStyled = styled.img`
    position: absolute;
    width: 14.75rem;
    height: 14.75rem;

    background: #14589C;
    filter: blur(200px);
    top: -15rem;
    left: 59.3rem;

    z-index: -99;

`

export const RetangunlarEffectStyled = styled.img`
    position: absolute;
    z-index: -1;
    filter: blur(106px);
    
`

export const EllipseRightStyled = styled.img`
    position: absolute;
    width: 14.75rem;
    height: 14.75rem;

    background: #14589C;
    filter: blur(200px);
    top: -15rem;
    z-index: -99;
    right: 59.3rem;
`
