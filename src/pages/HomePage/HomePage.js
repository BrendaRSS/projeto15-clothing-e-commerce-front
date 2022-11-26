import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DadosContext } from "../../context/DadosContext";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import praia from "../../assets/images/praia.jpg";
import black from "../../assets/images/blackf.jpg";
import esporte from "../../assets/images/esporte.jpg";
import acessorios from "../../assets/images/acessorios.jpg";
import cosmeticos from "../../assets/images/cosmeticos.jpg";
import blusas from "../../assets/images/blusas.jpg";
import calca from "../../assets/images/calca.jpg";
import bermuda from "../../assets/images/bermuda.jpg";
import vestidos from "../../assets/images/vestidos.jpg";
import saia from "../../assets/images/saia.jpg";
import banho from "../../assets/images/banho.jpg";
import img1 from "../../assets/images/img1.jpg";
import img3 from "../../assets/images/img3.jpg";
import img5 from "../../assets/images/img5.jpg";
import img7 from "../../assets/images/img7.jpg";
import img9 from "../../assets/images/img9.jpg";
import img11 from "../../assets/images/img11.jpg";
import bebe from "../../assets/images/bebe.jpg";
import fem from "../../assets/images/fem.jpg";
import inf from "../../assets/images/inf.jpg";
import masculina from "../../assets/images/masculina.jpg";
import colecaop from "../../assets/images/colecaoesp.jpg";
import colecaoesporte from "../../assets/images/colecaoesporte.jpg";
import Footer from "../../components/Footer";
import Promotions from "../../components/Promotions";

export default function HomePage() {
    const {
        categorySlected, setCategorySlected
    } = useContext(DadosContext);
    const navigate = useNavigate();

    function categorySelection(category){
        const config = {
            headers: {
                "categoria": `${category}`
            }
        }

        axios.get("http://localhost:5000/categories", config)
        .then((resposta)=> {
            console.log(resposta);
            setCategorySlected(resposta);
            // navigate("/category");
        })
        .catch((error)=>{
            console.log(error.response.data);
        })
    }

    function scrollHorizontally(){
        window.scrollBy(0, 100);
    }

    return (
        <ContainerHomePage>
            <Promotions/>
            <ContainerHighlights>
                <IoIosArrowBack onClick={scrollHorizontally}/>
                <Highlights>
                    <ContainerImages>
                        <div><Image alt="Destaques" src={black}/> Black Friday </div>
                        <div><Image alt="Destaques" src={praia}/> Moda Praia </div>
                        <div><Image alt="Destaques" src={esporte} /> Moda Esportiva </div>
                        <div><Image alt="Destaques" src={cosmeticos} /> Beleza </div>
                        <div><Image alt="Destaques" src={acessorios} /> Acessórios </div>
                        <div><Image alt="Destaques" src={banho} /> Corpo e Banho </div>
                        <div><Image alt="Destaques" src={blusas} /> Blusas e Camiseta </div>
                        <div><Image alt="Destaques" src={calca} /> Claças </div>
                        <div><Image alt="Destaques" src={bermuda} /> Bermudas e Shorts </div>
                        <div><Image alt="Destaques" src={vestidos} /> Vestidos </div>
                        <div><Image alt="Destaques" src={saia} /> Saias </div>
                    </ContainerImages>
                </Highlights>
                <IoIosArrowForward onClick={scrollHorizontally}/>
            </ContainerHighlights>
            <TitleNew>COLEÇÃO DE VERÃO</TitleNew>
            <ContainerNews>
                <New><img alt="Moda praia" src={img1} onClick={()=>categorySelection("Moda praia")}/></New>
                <New><img alt="Moda praia" src={img3} onClick={()=>categorySelection("Moda praia")}/></New>
                <New><img alt="Moda praia" src={img5} onClick={()=>categorySelection("Moda praia")}/></New>
            </ContainerNews>
            <TitleNew>DESTAQUES DE NATAL</TitleNew>
            <ContainerNews>
                <New><img alt="Blusas e Camisetas" src={img7} onClick={()=>categorySelection("Blusas e Camisetas")}/></New>
                <New><img alt="Blusas e Camisetas" src={img9} onClick={()=>categorySelection("Blusas e Camisetas")}/></New>
                <New><img alt="Vestidos" src={img11} onClick={()=>categorySelection("Vestidos")}/></New>
            </ContainerNews>
            <TitleNew>NOVIDADES ESPORTIVAS</TitleNew>
            <ContainerNews>
                <New><img alt="Moda esportiva" src={colecaoesporte} onClick={()=>categorySelection("Moda esportiva")}/></New>
                <New><img alt="Moda esportiva" src={colecaop} onClick={()=>categorySelection("Moda esportiva")}/></New>
                <New><img alt="Moda esportiva" src={masculina} onClick={()=>categorySelection("Moda esportiva")}/></New>
            </ContainerNews>
            <TitleNew>COLEÇÃO INFANTIL</TitleNew>
            <ContainerNews>
                <New><img alt="Blusas e Camisetas" src={bebe} onClick={()=>categorySelection("Blusas e Camisetas")}/></New>
                <New><img alt="Blusas e Camisetas" src={fem} onClick={()=>categorySelection("Blusas e Camisetas")}/></New>
                <New><img alt="Blusas e Camisetas" src={inf} onClick={()=>categorySelection("Blusas e Camisetas")}/></New>
            </ContainerNews>
            <Footer/>
        </ContainerHomePage>
    )
}

const ContainerHomePage = styled.div`
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
const ContainerHighlights = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Highlights = styled.div`
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
const ContainerImages = styled.div`
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
const Image = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
const ContainerNews = styled.div`
    width: 97%;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`
const New = styled.div`
    width:330px;
    height:330px;
    margin-left: 15px;
    cursor: pointer;
    img{
        width: 330px;
        height: 350px;
    }
`
const TitleNew=styled.div`
    margin-top: 60px;
    width: 95%;
    height: 50px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #f9f9f9;
`