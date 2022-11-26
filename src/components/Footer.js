import styled from "styled-components";
import { BiMap } from "react-icons/bi";
import { useContext } from "react";
import { DadosContext } from "../context/DadosContext";
import logo from "../assets/images/logo.png";

export default function Footer() {
    const {
        email, setEmail,
        password, setPassword,
    } = useContext(DadosContext);

    return (
        <FooterHomePage>
            <Address><BiMap />
                Localiação: <br /><br />
                CEP: 58012-750<br /><br />
                Rua Professor Bernardes Firmino, 555
            </Address>
            <Login>
                <span>Faça login</span><br/>
                <label>Email</label>
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    required
                />
                <label>Senha</label>
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Senha"
                    required
                />
            </Login>
            <Logo alt="Logo" src={logo}/>
        </FooterHomePage>
    )
}

const FooterHomePage = styled.footer`
    width: 100vw;
    height: 250px;
    background-color: #9e5076;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    margin-top: 2750px;
`
const Address = styled.div`
    box-sizing: border-box;
    padding: 10px 15px;
    width: 280px;
    height: 200px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: bold;
    text-align: start;
    color: #f9f9f9;
    svg{
        font-size: 20px;
    }
`
const Login = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: bold;
    text-align: start;
    color: #f9f9f9;
    input{
            width: 303px;
            height: 45px;
            margin-bottom: 6px;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 5px 10px;
            ::placeholder{
                font-family: 'Raleway', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #DBDBDB;
            }
    }
`
const Logo=styled.img`
   width: 250px;
   border-radius: 50%;
`