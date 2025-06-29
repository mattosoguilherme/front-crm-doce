import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroCliente from "./pages/cadastro";
import CadastroCardapio from "./pages/cardapio/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";
import Cardapio from "./pages/cardapio/index";
import Pedidos from "./pages/pedido";
import RegistroPedido from "./pages/pedido/registro";
import Cliente from "./pages/cliente";
import EditCardapio from "./pages/cardapio/edit";
import Comanda from "./pages/comanda";
import ViewComanda from "./pages/comanda/viewID";
import HomeUser from "./pages/area user/home_user";

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
          <Route path="/cardapio/cadastro/:id" element={<EditCardapio />} />
          <Route path="/pedido" element={<Pedidos />} />
          <Route path="/pedido/registro/:id" element={<RegistroPedido />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/comanda" element={<Comanda />} />
          <Route path="/comanda/:id" element={<ViewComanda />} />
          <Route path="/inicio" element={<HomeUser />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
