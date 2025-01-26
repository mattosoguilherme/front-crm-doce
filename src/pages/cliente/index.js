import ContainerS, { H1s } from "../styles";
import Header from "../../components/navbar";
import { Link } from "react-router-dom";

const Cliente = () => {


  
  return (
    <>
      <ContainerS>
        <Header />

        <H1s>Lista de Clientes</H1s>

        <div className="card" style={{ width: "18rem" }}>
          <img
            width={30}
            src="https://i.ibb.co/zGGYwwm/adicionar-usuario.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">nome cliente</h5>
            <h5>produto </h5>
            <h5>unidade </h5>

            <Link to="/pedido/registro">
              <button className="btn btn-primary " type="button">
                NOVO PEDIDO
              </button>
            </Link>
          </div>
        </div>

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
export default Cliente;
