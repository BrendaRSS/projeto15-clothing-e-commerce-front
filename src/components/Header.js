import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import { DadosContext } from "../context/DadosContext";
import logo from "../assets/images/logo.png";
import { RiShoppingBag3Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Header() {
    const {
        token, name, categoryInput, setCategoryInput
    } = useContext(DadosContext);

    return (
        <ContainerHeader>
            <Containerhigher>
                <img alt="Logo" src={logo} />
                <LineDecoration />
                <BoxInput>
                    <InputHeader
                        onChange={e => setCategoryInput(e.target.value)}
                        value={categoryInput}
                        type="text"
                        placeholder="Buscar produtos"
                        required
                    />
                    <ButtonInput>
                        <HiMagnifyingGlass />
                    </ButtonInput>
                </BoxInput>
                < LoginOrName>{token === "" ? "Entre ou cadastra-se" : name} <RiShoppingBag3Line /></LoginOrName>
            </Containerhigher>
            <ContainerCategories>Listinha de categoria aqui?</ContainerCategories>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
    width: 100vw;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #9e5076;
    box-shadow: -1px 3px 3px -1px rgba(0,0,0,0.75);
`
const Containerhigher = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        width: 100px;
        border-radius: 50%;
    }
`
const LineDecoration = styled.div`
    width: 1px;
    height: 60px;
    background-color: #f0a3c9;
`
const BoxInput = styled.div`
    border-radius: 40px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .5s;
    &:hover{
        box-sizing: border-box;
        padding: 2px  ;
    }
    svg{
        font-size: 25px;
        color: #43122a;
    }
`
const ButtonInput = styled.button`
width: 45px;
height: 45px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
border: none;
background: none;
transition: .5s;
${BoxInput}:hover & {
                background-color: #9e5076;
            }
`
const InputHeader = styled.input`
    width: 0px;
    border: none;
    background: none;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    padding: 0;
    color: #43122a;
    line-height: 45px;
    transition: .5s;
    ${BoxInput}:hover & {
                width: 300px;
                box-sizing: border-box;
                padding: 0 6px;
            }
    ::placeholder{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`
const LoginOrName = styled.div`
    width: 220px;
    height: 100px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
        width: 25px;
    }
`
const ContainerCategories=styled.div`
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 10px 15px;
    background-color: #9e5076;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #f9f9f9;
`