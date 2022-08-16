import styled from "styled-components";


export const Section = styled.section`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

export const Container = styled.div`
width: 100%;
display: grid;

grid-template-columns:repeat(4,1fr);
@media (max-width:960px) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
}
`

export const Card = styled.div`
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 240px;
height: 340px;
border-radius:14px;
border: 1px solid #ccc;
.img-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img{
        width: 90%;
        border-radius: 14px;
    }
}
.text-text{
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   line-height: 2rem;
  span{
    color: grey;
    font-size: 14px;
  }
  div{
    margin-top: 2rem;
    width: 90%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    svg{
        width: 16px;
        height: 16px;
        cursor: pointer;
       
        &:hover{
            transition-duration: .8s;
            background-color: #339df5;
            

        }
    }
  }
}
@media (max-width:960px) {
    width: 140px;
    height: 200px;
    margin: 10px;
    line-height: 0rem;
    .img-container{
    width: 100%;
    img{
        width: 50%;
    }
    .text-text{
        width: 80%;
        line-height: 0;
    }
}
}

`
