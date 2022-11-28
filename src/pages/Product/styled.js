import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  background: #43122a;
  flex-direction: row;
  color: #FFF;
  justify-content: center;
  align-items: center;
  height: calc(100% - 400px);
`;

export const ImageContainer = styled.div` 
  margin-right: 3rem;
`;

export const Image = styled.img` 
  height: 20rem;
  width: auto;
`;

export const DetailsContainer = styled.div` 
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
`;

export const ProductName = styled.h1` 
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ProductSize = styled.p`
  margin: 0.3rem 0 1rem 0;
  font-weight: 500;
`;

export const ProductColor = styled.p`
  margin: 0.3rem 0 1rem 0;
  font-weight: 500;
`;

export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9e5076;
  color: #FFF;
  border: none;
  border-radius: 0.3rem;
  height: 2.7rem;
  width: 18rem;
  margin-bottom: 1.4rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;