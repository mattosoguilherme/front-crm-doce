import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import ContainerS from "../styles";

const Cardapio = () => {
  return (
    <>
      <ContainerS>
        <Header />

        <Link to="/cadastro/cardapio">
          <button>Adicionar Item</button>
        </Link>
        <p> lista cardarpio</p>
      </ContainerS>
    </>
  );
};

export default Cardapio;
