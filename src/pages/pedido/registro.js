import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import { ContainerCadstroS, FormS, H1s } from "../styles";
import ReactInputMask from "react-input-mask";

const RegistroPedido = () => {
  return (
    <>
      <ContainerCadstroS>
        <Header />

        <H1s>Registro de Pedido</H1s>

        <FormS>
          {/* item do cardapio */}
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectProduto"
              aria-label="Floating label select example"
              required
            >
              <option selected>*Escolha o item</option>
              <option value="Alelo">surpresa de uva</option>
              <option value="Amil">brigadeiro</option>={" "}
            </select>
            <label for="floatingSelectProduto">Item do Pedido</label>
          </div>
          {/* preço do item */}
          <div className="form-floating mb-3">
            <ReactInputMask
              mask={"99,99"}
              type="text "
              className="form-control"
              id="floatingInputPreco"
              placeholder="R$ 0,00"
              required
            />
            <label for="floatingInputPreco">Preço </label>
          </div>

          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectProduto"
              aria-label="Floating label select example"
              required
            >
              <option selected>*Escolha o status</option>
              <option value="Alelo">pago</option>
              <option value="Amil">pendente</option>
            </select>
            <label for="floatingSelectProduto">Status do Pedido</label>
          </div>
          <button className="btn btn-primary " type="submit">
            Registrar
          </button>
          <Link to={"/cliente"}>
            <button className="btn btn-secondary">Voltar</button>
          </Link>
        </FormS>
      </ContainerCadstroS>
    </>
  );
};

export default RegistroPedido;
