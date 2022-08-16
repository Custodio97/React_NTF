import styled from "styled-components";


export const Section = styled.section`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: space-between;
img{
    width: 40%;
    border-radius: 14px;
}
@media (max-width:960px) {
    flex-direction: column;
    justify-content: center;
    img{
        width: 40%;
        margin-bottom: 2rem;
    }
}

@media (max-width:375px) {
    img{
        
        display: none;
    }
}
`
export const Form = styled.form`
width: 40%;
border: 1px solid #ccc;
border-radius: 14px;
display: flex;
align-items: center;
justify-content: center;
padding: 19px;
flex-direction: column;
@media (max-width:960px) {
    width: 90%;
}



`
export const BoxHeade = styled.div`
width: 100%;
align-items: center;
text-align: left;
`
export const BoxInput = styled.div`
width: 100%;
padding: 1rem 1rem;
input{
    background-color: #242435;
    padding: 1rem 1rem;
    border-radius: 14px;
    border: none;
    outline: none;
    width: 100%;
}
`
export const BoxText = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
textarea{
    width: 90%;
    height: 120px;
    margin-bottom: 1rem;
    border-radius: 14px;
    background-color: #242435;
}
`
export const Button = styled.button`
padding: 0.75rem 1rem;
outline: none;
width: 127px;
background-color: #0e9ff7;
cursor: pointer;
border: none;
border-radius: 13px;

`