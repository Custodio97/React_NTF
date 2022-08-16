import styled from "styled-components";

export const Section = styled.section`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Container = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3,1fr);
@media (max-width:960px) {
    grid-template-columns: 1fr;
}
`

export const Box = styled.div`
width: 320px;
height: 200px;
padding: 10px;
margin: 10px 0;
border-radius: 13px;
line-height: 2rem;
border:1px solid  #CCC;
&:hover{
    transition-duration: 0.8s;
    transform: translateY(-2px);
    cursor: pointer;
}
img{
    width: 45px;
    height: 45px;
    text-align: left;
}
h2{
    font-size: 1rem;
}
p{
    font-size: 14px;
}
@media (max-width: 400px) {
    width: 260px;
    height: 200px;
    img{
        width: 30px;
        height: 30px;
    }
    line-height: 2rem;
    h2{
        font-size: 13px;
    }
    p{
        font-size: 10px;
    }
}
@media (max-width:540px) {
    width: 280px;
    height: 140px;
    line-height: 12px;
    h2{
        font-size: 14px;
    }
    p{
        font-size: 11px;
    }
}
`