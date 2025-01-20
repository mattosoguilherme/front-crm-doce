import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import ContainerS, { H1s } from "../styles";

const Pedidos = () => {
  return (
    <>
      <ContainerS>
        <Header />

        <Link to="/pedido/registro">
          <button className="btn btn-primary " type="button">
            NOVO PEDIDO - esse botão deve ser movido para a pagina de cliente
          </button>
        </Link>

        <H1s> lista de pedidos  </H1s>

        <p> lembra de fazer a logica de busca do video </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5Tq4-UgPTDs?si=3g4TX0aKwWf0aJgx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <p>
          {" "}
          <br /> cliente / adicionar novo pedido / pegar ID e subir vinculado{" "}
          <br /> é melhor deixar pagina de cliente vinculada com função interna
          <br /> de registra de pedido para ficar mais otimizado{" "}
        </p>
      </ContainerS>
    </>
  );
};

export default Pedidos;
