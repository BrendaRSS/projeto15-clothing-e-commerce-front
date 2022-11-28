import { useReducer } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import reducer from "../../helpers/reducer";

import { RootContainer } from "./styled";
import Header from '../../components/Header';
import Footer from "../../components/Footer";

const initialState = {
  isLoading: false
}

function Root() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const categories = useLoaderData();
  
  return (
    <RootContainer>
      <Header categories={categories}/>
      <Outlet context={[state, dispatch]} />
      <Footer />
    </RootContainer>
  );
}

export default Root;
