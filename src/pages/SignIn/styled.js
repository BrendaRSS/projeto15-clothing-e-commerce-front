import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  background: #43122a;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 300px);
`;
 
export const BottomText = styled.p`
  color: #FFF;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 3rem;
`;

export const StyledLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
  font-weight: bold;

  :hover {
    text-decoration: underline;
    text-decoration-color: #FFF;
  }
`;  