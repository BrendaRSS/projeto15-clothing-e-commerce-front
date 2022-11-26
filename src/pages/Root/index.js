import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import { RootContainer } from "./styled";

const initialState = {
  isLoading: 0
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'AWAIT_RESPONSE':
      return (
        { ...state, isLoading: 1 }
      );
    case 'RESPONSE_RESOLVED':
      return (
        { ...state, isLoading: 0 }
      )
    default:
      throw new Error();
  }
}

function Root() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RootContainer>
      <Outlet context={[state, dispatch]} />
    </RootContainer>
  );
}

export default Root;
