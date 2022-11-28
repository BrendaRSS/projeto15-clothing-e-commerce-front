import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  text-shadow: 0 0 0 #666666;
  color: #FFF;
  width: 18rem;
  background: #43122a;
  border-width: 0 0 0.1rem 0;
  border-color: #FFF;
  spellcheck: false;
  margin-bottom: 0.5rem;
  height: 2.7rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;

  &:focus {
  outline: none;
  spellcheck: false;
  };

  :first-child {
    margin-top: 3rem;
  }

  :disabled {
    background: gray;
  };

  ::placeholder {
    color: #FFF;
  };
`;

export const Button = styled.button`
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

  :disabled {
    background: rgba(100,100,120,1);
  }
`;