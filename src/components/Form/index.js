import { useOutletContext } from 'react-router-dom';

import {
  FormContainer,
  Input,
  Button
} from './styled';

export function FormSubmitButton({ children }) {
  return (
    <Button
      type='submit'
    >
      {children}
    </Button>
  );
}

function handleInputChange(e, { inputData, setInputData }) {
  const target = e.target;
  const value = target.value;
  const name = target.name;

  setInputData({ ...inputData, [name]: value })
}

export function FormInputs({ state }) {
  const inputNames = [];
  Object.entries(state.inputData).forEach(field => {
    inputNames.push(field[0]);
  })

  return (
    inputNames.map(name => {
      return (
        <Input
          placeholder={name}
          value={state.inputData[name]}
          name={name}
          key={name}
          onChange={(e) => handleInputChange(e, state)}
          type='text'
        />
      );
    })
  );
};

export function Form({ children, request, submit }) {
  const [state, dispatch] = useOutletContext();
  return (
    <FormContainer onSubmit={(e) => {
      e.preventDefault();
      submit(request, dispatch);
    }}>
      {children}
    </FormContainer>
  );
};