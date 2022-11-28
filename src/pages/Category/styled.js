import styled from "styled-components";

export const ContainerCategory=styled.div`
    width: 100%;
    height: 2000px;
    background-color: #43122a;
`
export const IventarySelected=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const NameCategory=styled.div`
    width: 100%;
    height: 50px;
    margin-top: 100px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #f9f9f9;
`
export const LineDecoration=styled.div`
    width: 100%;
    height: 1px;
    background-color: #f9f9f9;
`
export const ContainerProducts=styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 20px;
`
export const Product=styled.div`
    width: 300px;
    height: 350px;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #f9f9f9;
    text-align: center;
    img{
        width: 300px;
        height: 310px;
        margin-bottom: 5px;
    }
    div{
        margin-top: 5px;
    }
`