import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerCart, Title, ProductCart, DescriptionProduct } from "./styled";
import qs from "qs";

export default function Cart() {
    const [arrayCart, setArrayCart] = useState("")
    const productsArray = [];
    async function getProductsCart(item) {
        return axios.get(`${process.env.REACT_APP_API_INVENTORY_URI}?id=${item._id}`)
            .then((resposta) => {
                productsArray.push(resposta.data)
                setArrayCart([...productsArray]);
            })
    }

    useEffect(() => {
        async function getProducts() {
            const cart = JSON.parse(localStorage.getItem('Cart'));
            const teste = await Promise.all(cart.items.map(async (item) => await getProductsCart(item)))
        }
        getProducts();
        console.log(arrayCart)
        console.log(productsArray)
    }, [])

    return (
        <ContainerCart>
            {arrayCart.length === 0 ? <Title>Minha sacola (0)</Title> : arrayCart.map((p) =>
                <ProductCart key={p._id}>
                    <img alt="Produto" src={p.image} />
                    <DescriptionProduct>
                       <span>{p.name}</span> 
                       <span>R${p.price}</span> 
                       <span>Cor: {p.color}</span>
                        <span>Tamanho: {p.size}</span>
                    </DescriptionProduct>
                </ProductCart>
            )}
        </ContainerCart>
    )
}