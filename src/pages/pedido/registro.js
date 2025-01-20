import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import { ContainerCadstroS, FormS, H1s } from "../styles";

const RegistroPedido = () => {
  return (
    <>
      <ContainerCadstroS>
        <Header />

        <H1s>Registro de Pedido</H1s>

        <FormS>
          <Link to={"/cliente"}>
            <button className="btn btn-secondary">Voltar</button>
          </Link>
        </FormS>
      </ContainerCadstroS>
    </>
  );
};

export default RegistroPedido;
