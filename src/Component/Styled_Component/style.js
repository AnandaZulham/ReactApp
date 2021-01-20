import styled from 'styled-components'

export const AppWrapper = styled.div `
    text-align: center;
`

export const AppHeader = styled.header `
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

export const AppLogo = styled.img  `
    height: 40vmin;
    pointer-events: none;
`

export const AppText = styled.p `
    color:red;
`

export const AppLink = styled.a `
    color:hover ${ props => props.color === "danger" ? "orange" : "yellow"};
`

export const Button = styled.button `
    color:white;
    font-weight:bold;
    padding: 10px; 
    border:none;
    margin-right:10px;
    cursor:pointer;
    margin-top:15px;
`
