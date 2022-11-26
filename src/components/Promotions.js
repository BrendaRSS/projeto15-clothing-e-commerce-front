import styled from "styled-components";

export default function Promotions(){
    return(
        <ContainerPromotions>
            <Promotion>Frete grátis em <br/> compras acima de R$99,90</Promotion>
            <Promotion>Descontos de até <br/> 80% OFF direto no carrinho</Promotion>
            <Promotion>Ofertas exclusivas até 27/11</Promotion>
            <Promotion>Divida em até <br/> 6x sem juros!</Promotion>
        </ContainerPromotions>
    )
}

const ContainerPromotions=styled.div`
    box-sizing: border-box;
    padding: 15px 10px;
    width: 100vw;
    height: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Promotion=styled.div`
    box-sizing: border-box; 
    padding: 15px 5px;
    width: 250px;
    height: 80px;
    border-radius: 40px;
    background-color: #9e5076;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #f9f9f9;
    cursor: pointer;
`