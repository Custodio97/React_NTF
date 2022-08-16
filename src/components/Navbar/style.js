import styled from "styled-components";


export const Header = styled.header`
width: 100%;
height: 65px;
display: flex;
align-items:center;
justify-content: space-between;
border-bottom: 1px solid #ccc;
position: fixed;
`

export const Logo = styled.div`
display: flex;
align-items: center
img{
   width: 25px;
   height: 25px;
}
`

export const Nav = styled.nav`
max-width: 1240px;
height: 100%;
display: flex;
align-items: center;
.nav-menu{
    list-style: none;
    display: flex;
    li{
        padding: 0 15px;
        a{
            text-decoration: none;
           color:#00a2ff;
        }
    }
}
@media (max-width:960px) {
    .nav-menu{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 40vw;
        height: 100vh;
        background-color: #1A1A24;
         position: fixed;
         top: 0;
         right: 0;
         opacity: 0;
         transition-duration: 0.8s;
        li{
            padding:14px 0;
        }
    }
    .nav-menu.active{
        opacity: 1;
    }
}
`

export const DivSerach = styled.div`
max-width: 200px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
border-radius: 12px;
input{
    background-color: none;
    width: 100%;
    border-radius: 12px;
    padding: 0.75rem 0.56rem;
    border: none;
    outline: none;
}
svg{
    width: 21px;
    height:21px;
}
@media (max-width:960px) {
    display: none;
}
`

export const Toggle = styled.div`
display: none;
position: fixed;
top: 1rem;
right: 1rem;
color: white;
@media  (max-width:960px) {
    display: flex;
}

`


