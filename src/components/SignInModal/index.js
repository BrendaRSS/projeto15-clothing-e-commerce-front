import { useState } from "react";
import { signInSubmit } from "../../helpers/signInSubmit";

import {
  SignInContainer,
  CloseButton
} from "./styled";
import {
  Form,
  FormSubmitButton,
  FormInputs
} from "../Form";
import { useOutletContext } from "react-router-dom";

export default function SignInModal() {
  const [loadState, dispatch] = useOutletContext();
  const [inputData, setInputData] = useState({
    'E-mail': '',
    Senha: ''
  });
  const inputState = {
    inputData: inputData,
    setInputData: setInputData,
  };
  const request = {
    data: {
      email: inputData['E-mail'],
      password: inputData.Senha
    },
    url: process.env.REACT_APP_API_SIGNIN_URI
  }

  return (
    <SignInContainer>
      <fieldset disabled={loadState.isLoading}>
        <Form
          request={request}
          submit={signInSubmit}
        >
          <CloseButton
            onClick={() => dispatch({ type: 'CLOSE_SIGNIN_MODAL' })}
          />
          <FormInputs
            state={inputState}
          />
          <FormSubmitButton>
            Entrar
          </FormSubmitButton>
        </Form>
      </fieldset>
    </SignInContainer>
  );
}