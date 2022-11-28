import { useState } from "react";
import { signUpSubmit } from "../../helpers/signUpSubmit";

import {
  SignUpContainer,
  CloseButton
} from "./styled";
import {
  Form,
  FormSubmitButton,
  FormInputs
} from "../Form";
import { useOutletContext } from "react-router-dom";

export default function SignUpModal() {
  const [loadState, dispatch] = useOutletContext();
  const [inputData, setInputData] = useState({
    'E-mail': '',
    Nome: '',
    Senha: '',
    CPF: '',
    'Ano de nascimento': ''
  });
  const inputState = {
    inputData: inputData,
    setInputData: setInputData,
  };
  const request = {
    data: {
      email: inputData['E-mail'],
      name: inputData.Nome,
      password: inputData.Senha,
      cpf: inputData.CPF,
      birth_year: inputData['Ano de nascimento']
    },
    url: process.env.REACT_APP_API_SIGNUP_URI
  }

  return (
    <SignUpContainer>
      <fieldset disabled={loadState.isLoading}>
        <Form
          request={request}
          submit={signUpSubmit}
        >
          <CloseButton
            onClick={() => dispatch({ type: 'CLOSE_SIGNUP_MODAL' })}
          />
          <FormInputs
            state={inputState}
          />
          <FormSubmitButton>
            Cadastrar
          </FormSubmitButton>
        </Form>
      </fieldset>
    </SignUpContainer>
  );
}