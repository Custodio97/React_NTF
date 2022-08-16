import styled, {createGlobalStyle} from "styled-components";


export const darkTheme = {
    body: '#1a1a24',
    fontColor:"#fff",
}

export const lightTheme = {
    body: "#eaedef",
    fontColor:"#000",
}

export const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};
.color{
    position: fixed;
    background-color: transparent;
    right: 14rem;
    top: 1rem;
    border: none;
    >svg{
        width: 30px;
        height: 30px;
         color: steelblue;
         
    }
}
 
@media (max-width:960px) {
    .color{
        right: 4rem;
        top: 1rem;
    }
}
`

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props)=> props.theme.body};
}
`