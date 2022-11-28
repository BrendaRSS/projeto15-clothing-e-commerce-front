import { useState } from "react";
import { signInSubmit } from "../../helpers/signInSubmit";
import { useOutletContext } from "react-router-dom";

import {
  SignInContainer,
  BottomText,
  StyledLink
} from "./styled";
import {
  Form,
  FormSubmitButton,
  FormInputs
} from "../../components/Form";

export default function SignIn() {
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
          <FormInputs
            state={inputState}
          />
          <FormSubmitButton>
            Entrar
          </FormSubmitButton>
        </Form>
      </fieldset>
      <BottomText>
        Não é cliente?&nbsp;
        <StyledLink to='/sign-up'>
          Cadastrar
        </StyledLink>
      </BottomText>
    </SignInContainer>
  );
}