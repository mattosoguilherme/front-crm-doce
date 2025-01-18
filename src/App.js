import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroCliente from "./pages/cadastro";
import CadastroCardapio from "./pages/cardapio/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";
import Cardapio from "./pages/cardapio/cardapio";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/cadastro" element={<CadastroCliente />} />
          <Route path="/cardapio/cadastro" element={<CadastroCardapio />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
