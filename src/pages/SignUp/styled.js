import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpContainer = styled.div`
  background: #43122a;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 400px);
`;

export const BottomText = styled.p`
  font-family: 'Raleway', sans-serif;
  color: #FFF;
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