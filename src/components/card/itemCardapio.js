import { Link } from "react-router-dom";
import { CardCardapioS, CardS } from "../../pages/styles";
import axios from "axios";

const CardCardapio = (props) => {
  const item = props.data;

  const handleCkeck = (boolean) => {
    axios
      .patch(`/cardapio/${item.id}`, { "active": boolean })
      .then((res) => {
        alert("ALTERAÇÃO REALIZADA COM SUCESSO");
      })
      .catch((err) => {
        console.log(err);
        alert("ERRO AO REALIZAR ALTERAÇÃO");
      });
  };

  return (
    <CardS className="card">
      <Link to={`/cardapio/cadastro/${item.id}`}>
        <button className="btn-edit">
          <i className="bi bi-pencil-square"></i>
        </button>
      </Link>

      <img src={item.urlFoto} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">{item.titulo}</h6>
        <p className="card-text">{item.descricao}</p>
        <p className="card-text preco">R$ {item.preco}</p>

        <div className="card-footer">
          <form method="POST" onSubmit={handleCkeck}>
            {" "}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                defaultChecked={item.active}
                onChange={(e) => handleCkeck(e.target.checked)}
              />
              <label
                className="form-check-label"
                for="flexSwitchCheckDefault"
              ></label>
            </div>
          </form>
        </div>
      </div>
    </CardS>
  );
};
export default CardCardapio;
