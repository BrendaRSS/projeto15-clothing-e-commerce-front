import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerCart, Title } from "./styled";

export default function Cart() {
    // const [i, setI] = useState(0);
    // const [arrayCart, setArrayCart] = useState([])

    // useEffect(() => {
    //     const cart = JSON.parse(localStorage.getItem('Cart'));
    //     const uri = process.env.REACT_APP_API_PRODUCTS_URI;

    //     console.log(arrayCart)
    //     if (i > cart.length) {
    //         axios.get(`${uri}${cart.items[i]._id}`)
    //             .then((resposta) => {
    //                 console.log(resposta.data);
    //                 const peça = resposta.data
    //                 let pedidos = [...arrayCart, peça]
    //                 setArrayCart(pedidos);
    //                 setI(i + 1);
    //             })
    //             .catch((error) => {
    //                 console.log(error.response.data);
    //             })
    //     }

    // }, [])

    return (
        <ContainerCart>
            <Title>Minha sacola (0)</Title>
        </ContainerCart>
    )
}