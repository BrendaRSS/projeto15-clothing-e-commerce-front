import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./context/DadosContext";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
