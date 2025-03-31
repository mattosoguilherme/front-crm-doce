import { Link } from "react-router-dom";
import { CardS } from "../../pages/styles";

const CardCliente = (props) => {
  const cliente = props.data;
  return (
    <>
      <CardS className="card">
        <Link to={`/cardapio/cadastro/${cliente.id}`}>
          <button className="btn-edit">
            <i className="bi bi-pencil-square"></i>
          </button>
        </Link>
        <img
          src="https://img.freepik.com/fotos-premium/cartoon-de-icone-3d-perfil-de-pessoa-ou-perfil-de-usuario-avatar-ilustracao-de-renderizacao-3d_276199-466.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{cliente.nome}</h5>
          <h5>{cliente.produto} </h5>
          <h5> {cliente.unidade} </h5>

          <Link to={`/pedido/registro/${cliente.id}`}>
            <button className="btn btn-primary " type="button">
              NOVO PEDIDO
            </button>
          </Link>
        </div>
      </CardS>
    </>
  );
};

export default CardCliente;
