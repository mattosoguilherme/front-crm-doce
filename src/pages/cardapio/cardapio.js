import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import ContainerS, { ListCardapio } from "../styles";
import CardCardapio from "../../components/card/itemCardapio";

const Cardapio = () => {
  return (
    <>
      <ContainerS>
        <Header />

        <Link to="/cardapio/cadastro">
          <button className="btn btn-primary " type="button">
            Adicionar Item
          </button>
        </Link>
   

        <ListCardapio>

          <CardCardapio />
          <CardCardapio />
          <CardCardapio />

        </ListCardapio>

      </ContainerS>
    </>
  );
};

export default Cardapio;
