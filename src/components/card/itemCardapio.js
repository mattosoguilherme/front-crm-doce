import { CardCardapioS } from "../../pages/styles";

const CardCardapio = () => {
  const handleCeck = () => {};
  return (
    <CardCardapioS className="card">
      <img
        src="https://static.vecteezy.com/ti/vetor-gratis/p1/15218223-de-contorno-de-icone-de-cupcake-de-creme-liquido-doce-vetor.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h6 className="card-title">surpresa de uva</h6>
        <p className="card-text">Descrição do Produto</p>
        <p className="card-text preco">R$ 00,00</p>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label"
            for="flexSwitchCheckDefault"
          ></label>
        </div>

        <i className="bi bi-pencil-square"></i>
        <i className="fi fi-bs-edit"></i>
      </div>
    </CardCardapioS>
  );
};
export default CardCardapio;
