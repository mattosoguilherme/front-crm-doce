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
          <h6 className="card-title">{cliente.nome}</h6>
          <h6>{cliente.produto} </h6>
          <h6> {cliente.unidade} </h6>

          <Link to={`/pedido/registro/${cliente.id}`}>
            <button className="btn btn-primary " type="button">
              NOVO PEDIDO
            </button>
          </Link>

          <Link to={`/comanda/${cliente.id}`}>
            <button className="btn btn-secondary " type="button">
              
              COMANDAS
            </button>
          </Link>
        </div>
      </CardS>
    </>
  );
};

export default CardCliente;
