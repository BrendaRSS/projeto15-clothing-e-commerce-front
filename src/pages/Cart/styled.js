import styled from "styled-components";

export const ContainerCart=styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #43122a;
    box-sizing: border-box;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
`
export const Title=styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px;
    text-align: start;
    font-family: 'Raleway';
    color: #f9f9f9;
    font-weight: bold;
    font-size: 25px;
`
export const ProductCart=styled.div`
    width: 400px;
    height: 130px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 5px;
    margin-bottom: 10px;
    img{
        width: 100px;
        height: 120px;
        margin-right: 15px;
    }
`
export const DescriptionProduct=styled.div`
    width: 250px;
    height: 100px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    display: flex;
    flex-direction: column;
    span{
        margin-bottom: 2px;
    }
`