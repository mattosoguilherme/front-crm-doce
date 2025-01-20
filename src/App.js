import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroCliente from "./pages/cadastro";
import CadastroCardapio from "./pages/cardapio/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";
import Cardapio from "./pages/cardapio/cardapio";
import Pedidos from "./pages/pedido";
import RegistroPedido from "./pages/pedido/registro";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<CadastroCliente />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/cardapio/cadastro" element={<CadastroCardapio />} />
          <Route path="/pedido" element={<Pedidos />} />
          <Route path="/pedido/registro" element={<RegistroPedido />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
