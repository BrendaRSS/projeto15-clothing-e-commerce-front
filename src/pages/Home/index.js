import {
  ContainerHomePage,
  Highlights,
  ContainerHighlights,
  ContainerImages,
  ContainerNews,
  Image,
  New,
  TitleNew
} from './styled';
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

        axios.get(process.env.REACT_APP_API_INVENTORY_URI, config)
        .then((resposta)=> {
            const products = resposta.data;
            if(products.length===0){
                alert("Tente mais tarde. Página ainda em construção!")
            } else {
                setCategorySlected(resposta.data);
                navigate("/category");
            }
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
        </ContainerHomePage>
    )
}