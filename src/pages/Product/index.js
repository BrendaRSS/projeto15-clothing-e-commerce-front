import { useLoaderData, useNavigate } from "react-router-dom";
import addToCart from "../../helpers/addToCart";

import {
  DetailsContainer,
  Image,
  ImageContainer,
  ProductColor,
  ProductContainer,
  ProductName,
  ProductPrice,
  ProductSize,
  BuyButton
} from "./styled";

export default function Product() {
  const {
    image,
    color,
    name,
    price,
    size,
    _id,
    category
  } = useLoaderData();
  const navigate = useNavigate();

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <DetailsContainer>
        <ProductName>
          {name}
        </ProductName>
        <ProductPrice>
          R$ {price}
        </ProductPrice>
        Tamanho
        <ProductSize>
          {size}
        </ProductSize>
        Cor
        <ProductColor>
          {color}
        </ProductColor>
        <BuyButton
          onClick={() => { addToCart({_id: _id, category: category}, navigate); }}
        >
          Comprar
        </BuyButton>
      </DetailsContainer>
    </ProductContainer>
  );
}