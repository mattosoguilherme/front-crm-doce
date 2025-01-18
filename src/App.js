import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroCliente from "./pages/cadastro";
import CadastroCardapio from "./pages/cardapio/cadastro";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/cadastro" element={<CadastroCliente />} />
          <Route path="/cardapio/cadastro" element={<CadastroCardapio />} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
