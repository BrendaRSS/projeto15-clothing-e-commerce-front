import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DadosContext } from "../../context/DadosContext";
import {
    ContainerCategory,
    IventarySelected,
    NameCategory,
    LineDecoration,
    ContainerProducts,
    Product
} from "./styled"
import Header from '../../components/Header';

export default function Category() {
    const {
        categorySlected, setCategorySlected
    } = useContext(DadosContext);
    const navigate = useNavigate();
   
    function productSelected(id){
        alert(id);
    }

    return (
        <ContainerCategory>
            <Header />
            <IventarySelected>
                <NameCategory>{categorySlected[0].category}</NameCategory>
                <LineDecoration />
                <ContainerProducts>
                    {categorySlected.map((p)=>
                        <Product onClick={()=>productSelected(p._id)}>
                            <img src={p.image} alt="Produto" />
                            {p.name}
                           <div>R${p.price}</div>
                        </Product>
                    )}
                </ContainerProducts>
            </IventarySelected>
        </ContainerCategory>
    )
}