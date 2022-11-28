import styled from "styled-components";

export const ContainerHomePage = styled.div`
    box-sizing: border-box;
    padding: 10px 10px;
    width: 100vw;
    height: 3000px;
    background-color: #43122a;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    svg{
        z-index: 1;
        margin: 0 2px;
        font-size: 60px;
        color: #f9f9f9;
        cursor: pointer;
    }
`
export const ContainerHighlights = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Highlights = styled.div`
    width: 95%;
    height: 200px;
    background-color:#43122a;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    overflow-x: auto;
    ::-webkit-scrollbar {
        width: 0px;
    }
`
export const ContainerImages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    left: 0;
    div{
        width: 180px;
        height: 180px;
        margin-left: 5px;
        margin-right: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-family: 'Raleway';
        color: #f9f9f9;
        font-weight: 400;
        font-size: 18px;
        cursor: pointer;
    }
`
export const Image = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
export const ContainerNews = styled.div`
    width: 97%;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`
export const New = styled.div`
    width:330px;
    height:330px;
    margin-left: 15px;
    cursor: pointer;
    img{
        width: 330px;
        height: 350px;
    }
`
export const TitleNew=styled.div`
    margin-top: 60px;
    width: 95%;
    height: 50px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #f9f9f9;
`