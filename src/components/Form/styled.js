import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  text-shadow: 0 0 0 #666666;
  color: blue;
  width: 18rem;
  border: none;
  border-radius: 0.3rem;
  spellcheck: false;
  margin-bottom: 0.5rem;
  height: 2.7rem;
  font-weight: 400;
  font-size: 0.8rem;

  &:focus {
  outline: none;
  spellcheck: false;
  };

  :disabled {
    background: gray;
  };

  ::placeholder {
    color: #7E7E7E;
  };
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(100,100,120,0.6);
  color: #FFF;
  border: none;
  border-radius: 0.3rem;
  height: 2.7rem;
  width: 18rem;
  margin-bottom: 1.4rem;
  font-weight: 700;
  font-size: 1rem;

  &:focus {
    outline: none;
  }

  :disabled {
    background: rgba(100,100,120,1);
  }
`;