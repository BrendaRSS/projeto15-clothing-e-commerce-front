import { useState } from "react";
import axios from 'axios';

import { SignUpContainer } from "./styled";
import {
  Form,
  FormSubmitButton,
  FormInputs
} from "../Form";
import { useOutletContext } from "react-router-dom";

async function signUpSubmit(request, dispatch) {
  dispatch({ type: 'AWAIT_RESPONSE' });

  try {
    await axios.post(request.url, request.data);
    dispatch({ type: 'RESPONSE_RESOLVED' });
  } catch (e) {
    dispatch({ type: 'RESPONSE_RESOLVED' });
    console.error(e);
  }
}

export default function SignUpModal() {
  const [loadState, dispatch] = useOutletContext();
  const [inputData, setInputData] = useState({
    'E-mail': '',
    Nome: '',
    Senha: ''
  });
  const state = {
    inputData: inputData,
    setInputData: setInputData,
  };
  const request = {
    data: {
      email: inputData['E-mail'],
      name: inputData.Nome,
      password: inputData.Senha
    },
    url: process.env.REACT_APP_SIGNUP_URI
  }

  return (
    <SignUpContainer>
      <fieldset disabled={loadState.isLoading}>
        <Form
          request={request}
          submit={signUpSubmit}
        >
          <FormInputs
            state={state}
          />
          <FormSubmitButton>
            Cadastrar
          </FormSubmitButton>
        </Form>
      </fieldset>
    </SignUpContainer>
  );
}