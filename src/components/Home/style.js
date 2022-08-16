import styled from "styled-components";



export const Section = styled.section`

width: 100%;
height: 100vh;
display:flex;
align-items: center;
justify-content: center;

img{
    width: 30%;
}
@media (max-width:960px) {
    flex-direction: column-reverse;
    img{
        width: 50%;
    }
}
`

export const Container = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h1{
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
p{
    font-size: 1.3rem;
    line-height: 2rem;
}
div{
    display: flex;
    align-items: center;
    button{
    margin-right: 1rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 0.80rem 3rem;
    cursor: pointer;
}
.get{
    background-color: #00a3ff;
   
    &:hover{
         transition-delay:  0.5s;
        background-color: #212e48;
    }
    @media (max-width:960px) {
        padding: 0.70rem 3.5rem ;
    }
}
.create{
    background-color: #14141e;
    
    &:hover{
        transition-delay:  0.5s;
        background-color: #00a3ff;
    }
}
}
@media (max-width:960px) {
    h1{
        font-size: 1rem;
    }
    p{
        font-size: 0.90rem;
    }
}
`